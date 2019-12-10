import { Component, OnInit } from '@angular/core';
import {User} from '../../classes/user';
import {LoginSignupService} from '../../services/login-signup.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {
  private user: User;
  constructor() { }

  ngOnInit() {
    this.user = new User();
    console.log('Question creation initialised');
  }
  //
  // submitNewQuestion() {
  //   this.loginSignupService.signupUser(this.user).subscribe(
  //     data => console.log(data),
  //     error => console.log(error)
  //   );
  //   this.router.navigate(['/']);
  // }

}
//
//
//
//
//
//
// export class SignupComponent implements OnInit {
//
//   constructor(private loginSignupService: LoginSignupService, private router: Router) { }
//
//   ngOnInit() {
//     this.user = new User();
//     console.log('Signup initialised');
//   }
//
//   signupUser() {
//     this.loginSignupService.signupUser(this.user).subscribe(
//       data => console.log(data),
//       error => console.log(error)
//     );
//     this.router.navigate(['/']);
//   }
//
// }
