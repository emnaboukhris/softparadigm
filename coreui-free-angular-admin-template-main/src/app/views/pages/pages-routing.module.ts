import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './accueil/contact/contact.component';
import { PortfolioComponent } from './accueil/portfolio/portfolio.component';
import { ServicesComponent } from './accueil/services/services.component';
import { TeamComponent } from './accueil/team/team.component';
import { AboutComponent } from './accueil/about/about.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'pages'
    },    children: [
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'About Page'
        }, 
        
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact Page'
        }, 
        
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
        data: {
          title: 'Portfolio Page'
        }, 
        
      },
      {
        path: 'services',
        component: ServicesComponent,
        data: {
          title: 'Services Page'
        }, 
        
      },
      {
        path: 'team',
        component: TeamComponent,
        data: {
          title: 'Team Page'
        }, 
        
      },
    ]}, 

  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  }
,



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
