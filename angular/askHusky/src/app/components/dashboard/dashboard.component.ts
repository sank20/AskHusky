import { Component, OnInit } from '@angular/core';
import {LoginSignupService} from '../../services/login-signup.service';
import {error} from "util";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private loginSignupService : LoginSignupService) { }

  ngOnInit() {
    this.nextMethod();
  }
  nextMethod(){
    this.loginSignupService.changePassword({}).subscribe(
      data => console.log(data),
      error => console.log(error)

    );
  };
}
