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
import { ArchwizardModule } from 'angular-archwizard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomepageComponent
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
