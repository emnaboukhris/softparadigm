import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {NgxSpinnerModule} from "ngx-spinner";
import {TenantRoutes} from "./tenant.routing";
import {TenantComponent} from "./tenant/tenant.component";

@NgModule({
  declarations: [TenantComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TenantRoutes),
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ]
})
export class RegisterTenantModule {
}
