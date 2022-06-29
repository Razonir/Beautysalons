import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './screens/error/error.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/LoginFolder/login/login.component';
import { PrivacyComponent } from './screens/privacy/privacy.component';
import { TermsComponent } from './screens/terms/terms.component';
import { UserDashboardComponent } from './screens/user-dashboard/user-dashboard.component';

 
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'user-dashboard' , component: UserDashboardComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
