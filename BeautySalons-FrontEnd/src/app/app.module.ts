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
    CreateBusinessComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
