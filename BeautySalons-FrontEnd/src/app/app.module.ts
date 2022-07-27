import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/LoginFolder/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PrivacyComponent } from './screens/privacy/privacy.component';
import { TermsComponent } from './screens/terms/terms.component';
import { ErrorComponent } from './screens/error/error.component';
import { UserDashboardComponent } from './screens/user-dashboard/user-dashboard.component';
import { CreateBusinessComponent } from './screens/user-dashboard/create-business/create-business.component';
import { BusinessComponent } from './screens/business/business.component';
import { BusinessPageComponent } from './screens/business/business-page/business-page.component';
import { ManageComponent } from './screens/user-dashboard/manage/manage.component';

import { LogoutComponent } from './screens/LoginFolder/logout/logout.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { AdminGuard } from './guard/admin.guard';
import { ContactComponent } from './screens/contact/contact.component';
import { HomepageComponent } from './screens/home/homepage/homepage.component';
import { BusinessCardComponent } from './component/business-card/business-card.component';
import { ButtonComponent } from './component/button/button.component';
import { ServicecardComponent } from './component/servicecard/servicecard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    PrivacyComponent,
    TermsComponent,
    ErrorComponent,
    UserDashboardComponent,
    CreateBusinessComponent,
    BusinessComponent,
    BusinessPageComponent,
    ManageComponent,
    LogoutComponent,
    ContactComponent,
    HomepageComponent,
    BusinessCardComponent,
    ButtonComponent,
    ServicecardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [LoginGuard,LogoutGuard,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
