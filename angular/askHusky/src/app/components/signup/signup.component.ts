import { Component, OnInit } from '@angular/core';
import {User} from '../../classes/user';
import {LoginSignupService} from '../../services/login-signup.service';
import {Router} from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {Tag} from '../../classes/tag';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private user: User;
  private tag: Tag;
  private row: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};


  constructor(private loginSignupService: LoginSignupService, private router: Router) { }

  ngOnInit() {
    this.user = new User();
    console.log('Signup initialised');
    this.loginSignupService.fetchTags().subscribe(
      (data) => {

        for ( let key in data) {
          if (data.hasOwnProperty(key)) {
            console.log(key);
            console.log(data[key]['tagName']);
            this.row = `{item_id: "${key}", item_text: "${data[key]['tagName']}"}`;
            this.dropdownList = [
              { item_id: 1, item_text: 'HTML' },
              { item_id: 2, item_text: 'JavaScript' },
              { item_id: 3, item_text: 'CSS' },
              { item_id: 4, item_text: 'Java' },
              { item_id: 5, item_text: 'C++' }
            ];
          }
        }
        console.log(this.dropdownList);
      },
error => console.log(error)
    );

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  signupUser() {
    console.log(this.user);

    this.selectedItems.forEach(element => {
      this.tag = new Tag(element['item_text']);
      this.user.interestedTags.push(this.tag);
    });

    this.loginSignupService.signupUser(this.user).subscribe(
data => {console.log(data);
         this.user = new User();
              },
error => console.log(error)
    );
    this.router.navigate(['/']);

  }

}
