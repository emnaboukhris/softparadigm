import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from "ngx-spinner";
import {take} from "rxjs";
import {environment} from "../../../environments/environment";
import {CustomTenant} from "../CustomTenant.model";
import {Employee} from "../Employee.model";
import {ProductFamily} from "../product-family.model";
import {Tenant} from '../tenant.model';
import {TenantService} from "../tenant.service";

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {

  // @ts-ignore
  tenantForm: FormGroup;
  tenant = new Tenant();
  employee = new Employee();
  // @ts-ignore
  storUrl: string;
  customTenant = new CustomTenant();
  productFamilyList: ProductFamily[] = new Array<ProductFamily>();
  selectProductFamily: any;
  erroMessage = '';
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private spinner: NgxSpinnerService,
              private tenantService: TenantService) {

  }

  ngOnInit(): void {
    this.tenant = new Tenant();
    this.tenantForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')])],
      StoreName: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_]+$')])],
      password: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.min(8)])],
      productFamily: ['']
    });
    this.findProductFamily();

  }

  get formGroup() {
    return this.tenantForm.controls;
  }

  createNewStore() {
    this.submitted = true;
    if (this.tenantForm.invalid)
      return;

    this.spinner.show();
    // @ts-ignore
    this.tenant.name = this.tenantForm.get('StoreName').value;
    this.employee = new Employee();
    this.employee.addresses = [];
    // @ts-ignore
    this.employee.password = this.tenantForm.get('password').value;
    // @ts-ignore
    this.employee.email = this.tenantForm.get('email').value;
    // @ts-ignore
    this.employee.phoneNumber1 = this.tenantForm.get('phoneNumber').value;
    this.employee.activated = true;
    this.employee.login = this.employee.email;
    this.customTenant = new CustomTenant();
    this.customTenant.tenantDTO = this.tenant;
    this.customTenant.managedUserVM = this.employee;
    this.customTenant.productFamilyId = this.selectProductFamily;
    this.tenantService.create(this.customTenant).subscribe(res => {
      this.spinner.hide();
      document.location.href = 'http://' + res.code + '.' + environment.domain;
    }, (err) => {
      this.spinner.hide();
      this.erroMessage = err.error.errorType;
    })
  }


  changeStoreUrl() {
    // @ts-ignore
    let storeName = this.tenantForm.get('StoreName').value
    storeName = storeName.replace(' ', '-')
    this.tenant.code = storeName;
    this.storUrl = storeName + "." + environment.domain;
  }

  findProductFamily() {
    this.tenantService.findProductFamily().pipe(take(1))
      .subscribe(productFamilies => {
        this.productFamilyList = productFamilies;
      });
  }
}
