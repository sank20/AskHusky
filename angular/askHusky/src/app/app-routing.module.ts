import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HomepageComponent} from  './components/homepage/homepage.component';

import {ProfileComponent} from './components/profile/profile.component';
import {CalanderEventComponent} from './components/calander-event/calander-event.component';
import { EventRequestComponent } from './components/event-request/event-request.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path : 'calender-event', component : CalanderEventComponent},
  {path : 'request-events', component : EventRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
