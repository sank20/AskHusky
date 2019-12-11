import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HomepageComponent} from  './components/homepage/homepage.component';
import {ProfileComponent} from './components/profile/profile.component';
import { EventRequestComponent } from './components/event-request/event-request.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CreateQuestionComponent} from './components/create-question/create-question.component';
import { EventViewRequestsComponent } from './components/event-view-requests/event-view-requests.component';
import {QuestionDetailComponent} from './components/question-detail/question-detail.component';
import {QuestionsListComponent} from './components/questions-list/questions-list.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'profile', component: ProfileComponent},
      {path: 'request-events', component: EventRequestComponent},
      {path: 'create-question', component: CreateQuestionComponent},
      {path: 'request-view', component: EventViewRequestsComponent},
      {path : 'question-details', component : QuestionDetailComponent},
      {path : 'question-list', component : QuestionsListComponent},
      // {path : 'dashboard', redirectTo: 'question-list'}
    ]
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
