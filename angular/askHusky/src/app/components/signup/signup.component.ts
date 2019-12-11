import { Component, OnInit } from '@angular/core';
import {User} from '../../classes/user';
import {LoginSignupService} from '../../services/login-signup.service';
import {Router} from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {Tag} from '../../classes/tag';
import {QuestionService} from '../../services/question.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private user: User;
  private tags: any;
  private tagsList: any;


  constructor(private loginSignupService: LoginSignupService, private router: Router, private questionService : QuestionService) { }

  ngOnInit() {
    this.user = new User();
    console.log('Signup initialised');
    this.questionService.fetchTags().subscribe(tagList => {this.tagsList = tagList;
    });
  }
  signupUser() {
    console.log(this.user);

    let t: any = [];
    for (let i = 0; i < this.tags.length; i++) {
      t[i] = this.tags[i].tagName;
    }
    this.user.interestedTags = t;
    this.loginSignupService.signupUser(this.user).subscribe(
data => {console.log(data);
         this.user = new User();
              },
error => console.log(error)
    );
    this.router.navigate(['/']);

  }

}
