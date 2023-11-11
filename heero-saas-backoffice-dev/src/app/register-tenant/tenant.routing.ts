import {Routes} from "@angular/router";
import {TenantComponent} from "./tenant/tenant.component";

export const TenantRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: TenantComponent
      }
      ]
  }
];
