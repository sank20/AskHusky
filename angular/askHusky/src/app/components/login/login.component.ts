import { Component, OnInit } from '@angular/core';
import {User} from '../../classes/user';
import {LoginSignupService} from '../../services/login-signup.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private user: User;
  constructor(private loginSignupService: LoginSignupService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    console.log('Login initialised');
  }

  loginUser() {
    this.loginSignupService.loginUser(this.user).subscribe(
      data => console.log(data),
      error => console.log('ERROR= ' + JSON.stringify(error))
    );
    this.router.navigate(['/dashboard']);
  }

}
