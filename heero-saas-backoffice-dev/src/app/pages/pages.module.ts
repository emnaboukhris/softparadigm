import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";

import {PagesRoutingModule} from './pages-routing.module';
import {SectionComponent} from "./section/section.component";
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { CtaComponent } from './cta/cta.component';
import { SkillsComponent } from './skills/skills.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CollapsedListComponent } from './collapsed-list/collapsed-list.component';
import { TeamCardComponent } from './team/teamCard/team-card.component';
import { PricingCardComponent } from './pricing/pricing-card/pricing-card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    PricingComponent,
    CtaComponent,
    SkillsComponent,
    WhyUsComponent,
    CollapsedListComponent,
    TeamCardComponent,
    PricingCardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
}
