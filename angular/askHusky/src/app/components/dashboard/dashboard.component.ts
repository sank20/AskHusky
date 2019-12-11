import { Component, OnInit } from '@angular/core';
import {LoginSignupService} from '../../services/login-signup.service';
import {error} from "util";
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private loginSignupService: LoginSignupService) { }

  ngOnInit() {
    this.nextMethod();
    this.router.navigate(['']);
  }
  nextMethod() {
    this.loginSignupService.changePassword({}).subscribe(
      data => console.log(data),
      error => console.log(error)

    );
  }
}
