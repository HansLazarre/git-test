import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';

import {FlexLayoutModule} from '@angular/flex-layout';
import {SlideshowModule} from 'ng-simple-slideshow';
import {CookieService} from 'ngx-cookie-service';

import {AppComponent} from './app.component';

import {AppMaterialModule} from './app-material.module';
import {AppSharedModule} from './app-shared.module';
import {AppRoutingModule} from './app-routing.module';
import {ErrorDocModule} from './error-doc/error-doc.module';
import {SecurityModule} from './security/security.module';
import {StakeholderModule} from './stakeholder/stakeholder.module';
import {VolunteerModule} from './volunteer/volunteer.module';

import {HeaderComponent} from './shared/header/header.component';
import {BannerComponent} from './shared/banner/banner.component';
import {HomeComponent} from './shared/home/home.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SnackBarComponent} from './shared/snack-bar/snack-bar.component';
import {NavigationComponent} from './shared/navigation/navigation.component';
import {ProgressBarComponent} from './shared/progress-bar/progress-bar.component';

import {AuthService} from './services/auth.service';
import {LoaderService} from './services/loader.service';
import {LoggerService} from './services/logger.service';
import {MessageService} from './services/message.service';
import {ScrollerService} from './services/scroller.service';

import {AuthGuard} from './guards/auth-guard.service';
import {httpInterceptorProviders} from './http-interceptors';
import {AboutComponent} from './shared/about/about.component';
import {RsFormModule} from './form/rs-form.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SnackBarComponent,
    ProgressBarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SlideshowModule,
    FlexLayoutModule,

    AppMaterialModule,
    AppSharedModule,
    RsFormModule,

    SecurityModule, // Order Matters for routing
    StakeholderModule,
    VolunteerModule,
    AppRoutingModule,
    ErrorDocModule, // ** 404
  ],
  providers: [
    CookieService,

    AuthService,
    AuthGuard,
    LoaderService,
    LoggerService,
    ScrollerService,
    MessageService,
    httpInterceptorProviders,
  ],
  exports: [
    AppSharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
