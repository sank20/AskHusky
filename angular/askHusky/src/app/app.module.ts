import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {LoginSignupService} from './services/login-signup.service';
import {HttpClientModule} from '@angular/common/http';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CalanderEventComponent } from './components/calander-event/calander-event.component';
import { EventRequestComponent } from './components/event-request/event-request.component';
import { ArchwizardModule } from 'angular-archwizard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomepageComponent,
    CreateQuestionComponent,
    ProfileComponent,
    CalanderEventComponent,
    EventRequestComponent,
    NavbarComponent,
    QuestionsListComponent,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ArchwizardModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [LoginSignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
