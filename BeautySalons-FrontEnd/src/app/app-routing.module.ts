import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessPageComponent } from './screens/business/business-page/business-page.component';
import { BusinessComponent } from './screens/business/business.component';
import { ErrorComponent } from './screens/error/error.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/LoginFolder/login/login.component';
import { PrivacyComponent } from './screens/privacy/privacy.component';
import { TermsComponent } from './screens/terms/terms.component';
import { CreateBusinessComponent } from './screens/user-dashboard/create-business/create-business.component';
import { ManageComponent } from './screens/user-dashboard/manage/manage.component';
import { UserDashboardComponent } from './screens/user-dashboard/user-dashboard.component';

import { LogoutComponent } from './screens/LoginFolder/logout/logout.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { ContactComponent } from './screens/contact/contact.component';
import { HomepageComponent } from './screens/home/homepage/homepage.component';
import { EditComponent } from './screens/user-dashboard/manage/edit/edit.component';
import { EditUserComponent } from './screens/user-dashboard/edit-user/edit-user.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: 'logout', component: LogoutComponent, canActivate: [LoginGuard] },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'contact', component: ContactComponent },
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
  {
    path: 'user-dashboard',
    canActivate: [LoginGuard],
    children: [{
      path: '',
      component: UserDashboardComponent
    },
    {
      path: 'create',
      component: CreateBusinessComponent
    },
    {
      path: 'update',
      component: EditUserComponent
    },
    {
      path: 'manage',
      children: [
        {
          path: '',
          component: ManageComponent
        },
        {
          path: ':bid',
          component: EditComponent
        }
      ]
    },
    ]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
