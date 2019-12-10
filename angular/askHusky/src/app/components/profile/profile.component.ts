import {Component, Input, OnInit} from '@angular/core';
import {LoginSignupService} from '../../services/login-signup.service';
import {User} from '../../classes/user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

constructor(private loginSignupService: LoginSignupService, private router: Router) { }
private user: User;
  changePasswordObj = { userName: null, oldPassword: null , newPassword: null };

  // @Input(){}

ngOnInit(){
  this.user = this.loginSignupService.getLoggedInUser();
  this.changePasswordObj.userName = this.user.userName;
  console.log('profile fetched');
    // this.getProfile();
  }
  changePassword() {
    this.loginSignupService.changePassword(this.user).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.router.navigate(['/']);
  }


}


// getProfile() {
//     const body: any  = {
//
//     };
//     const headers: any = [];
//
//
//   }
// }
