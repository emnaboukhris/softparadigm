import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [{
  path: '',
  redirectTo: '',
  pathMatch: 'full',
  component: HomeComponent
},
  {
    path: '',
    children: [{
      path: '',
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    }]
  },
  {
    path: '',
    children: [{
      path: 'register',
      loadChildren: () => import('./register-tenant/register-tenant.module').then(m => m.RegisterTenantModule)
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
