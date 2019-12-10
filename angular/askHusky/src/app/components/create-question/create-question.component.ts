import { Component, OnInit } from '@angular/core';
import {User} from '../../classes/user';
import {LoginSignupService} from '../../services/login-signup.service';
import { QuestionService } from './../../services/question.service';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {
  private user: User;
  private tags: any;
  public Editor = ClassicEditor;

  private baseUri = 'http://localhost:3000';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private userService: UserService,private questionService : QuestionService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getterUser();
    console.log('Question creation initialised');
    this.questionService.fetchTags().subscribe(tagList => this.tags = tagList);
  }



  // fetchTags(): any {
  //   this.loginSignupService.fetchTags().subscribe(
  //     data => {
  //       this.tags = data;
  //       console.log(this.tags);
  //     },
  //     error => this.tags = []
  //   );
  // }
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
