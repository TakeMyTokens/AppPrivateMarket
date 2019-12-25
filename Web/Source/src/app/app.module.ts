import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvertisementService } from './services/advertisement/advertisement.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './services/http-interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { footerComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    footerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    HttpClient,
    AdvertisementService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
