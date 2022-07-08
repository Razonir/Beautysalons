import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessPageComponent } from './screens/business/business-page/business-page.component';
import { BusinessComponent } from './screens/business/business.component';
import { ErrorComponent } from './screens/error/error.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/LoginFolder/login/login.component';
import { PrivacyComponent } from './screens/privacy/privacy.component';
import { TermsComponent } from './screens/terms/terms.component';
import { CreateBusinessComponent } from './screens/user-dashboard/create-business/create-business.component';
import { UserDashboardComponent } from './screens/user-dashboard/user-dashboard.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  {
    path: 'business',
    children: [
      {
        path: '',
        component: BusinessComponent
      },
      {
        path: ':bid',
        component: BusinessPageComponent
      }
    ]
  },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'user-dashboard/create', component: CreateBusinessComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
