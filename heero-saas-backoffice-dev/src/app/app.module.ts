import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from './app.component';
import { AboutServices } from "./pages/about/about.service";
import {PagesRoutingModule} from "./pages/pages-routing.module";
import {PagesModule} from "./pages/pages.module";
import {RegisterTenantModule} from "./register-tenant/register-tenant.module";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    RegisterTenantModule,
    PagesModule,
    PagesRoutingModule
  ],
  providers: [AboutServices],
  bootstrap: [AppComponent]
})

export class AppModule {
}
