import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../../services/event-service.service';
import {LoginSignupService} from '../../services/login-signup.service';
import {Router} from '@angular/router';
import {EventRequest} from './../../classes/eventRequest';
import {User} from '../../classes/user';

@Component({
  selector: 'app-event-view-requests',
  templateUrl: './event-view-requests.component.html',
  styleUrls: ['./event-view-requests.component.scss']
})
export class EventViewRequestsComponent implements OnInit {

  constructor(private eventServiceService: EventServiceService, private loginSignupService: LoginSignupService, private router: Router) { }

  private user: User ;
  organizerList: Array<EventRequest>;
  ngOnInit() {

    this.user = this.loginSignupService.getLoggedInUser();
    // @ts-ignore
    this.eventServiceService.listOrganizer(user.userName).subscribe( orgList => {
      this.organizerList = orgList;
    });

    console.log('orgList');
    console.log(this.organizerList);
  }




}
