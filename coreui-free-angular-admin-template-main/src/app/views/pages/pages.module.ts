import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule, NavModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ContactComponent } from './accueil/contact/contact.component';
import { AboutComponent } from './accueil/about/about.component';
import { ServicesComponent } from './accueil/services/services.component';
import { PortfolioComponent } from './accueil/portfolio/portfolio.component';
import { TeamComponent } from './accueil/team/team.component';
import { DocsExampleComponent } from '@docs-components/docs-example/docs-example.component';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamCardComponent } from './accueil/team/team-card/team-card.component';

@NgModule({
  declarations: [
    
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    TeamComponent,
    TeamCardComponent,
    
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    DocsComponentsModule,
    TabsModule,
    NavModule, 
    ReactiveFormsModule
  ]
})
export class PagesModule {
}
