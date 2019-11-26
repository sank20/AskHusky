import { Component, OnInit } from '@angular/core';
import {User} from '../../classes/user';
import {LoginSignupService} from '../../services/login-signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private user: User;
  constructor(private loginSignupService: LoginSignupService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    console.log('Signup initialised');
  }

  signupUser() {
    this.loginSignupService.signupUser(this.user).subscribe(
data => console.log(data),
error => console.log(error)
    );
    this.router.navigate(['/']);
  }

}
