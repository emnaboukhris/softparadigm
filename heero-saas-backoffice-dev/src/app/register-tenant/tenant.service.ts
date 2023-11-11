import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICustomTenant} from "./CustomTenant.model";
import {ProductFamily} from "./product-family.model";
import {Tenant} from "./tenant.model";
import {environment} from "../../environments/environment";

@Injectable({ providedIn: 'root' })
export class TenantService {
  userLang = navigator.language;

  constructor(private http: HttpClient) {
  }

  getTenantForHostname(hostname: string): string {
    return  hostname.split('.')[0];
  }

  getTenant(): string {
    return  this.getTenantForHostname(location.hostname);
  }

  create(tenant: ICustomTenant): Observable<any> {
    return this.http.post(environment.apiUrl +'api/tenants/', tenant);
  }

  findByCode(code: string): Observable<Tenant> {
    return this.http.get(environment.apiUrl + 'api/tenants-by-code/' + code);
  }

  addTenantToHeaders(headers: HttpHeaders): HttpHeaders {
    if (this.getTenant() !== "localhost") {
      return headers.append("X-Tenant", this.getTenant());
    }else
    {
      return headers.append("X-Tenant", '');
    }
  }
  findProductFamily(): Observable<ProductFamily[]>{
    return this.http.get<ProductFamily[]>(environment.apiUrl + 'api/product-families/DEFAULT_FAMILY/FRENCH_FRANCE');
  }
}
