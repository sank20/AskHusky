import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from '../../services/user.service';
import {User} from '../../classes/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getterUser();
  }

  goToProfile() {
    this.router.navigate(['/profile/:id']);
  }
}
