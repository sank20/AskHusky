import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HomepageComponent} from  './components/homepage/homepage.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
