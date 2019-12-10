import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../../services/event-service.service';
import {LoginSignupService} from '../../services/login-signup.service';
import {Router} from '@angular/router';
import {User} from '../../classes/user';

@Component({
  selector: 'app-event-request',
  templateUrl: './event-request.component.html',
  styleUrls: ['./event-request.component.scss']
})


export class EventRequestComponent implements OnInit {
  private user: User;
  constructor(private eventServiceService: EventServiceService, private loginSignupService: LoginSignupService, private router: Router) { }

  ngOnInit() {
    this.user = this.loginSignupService.getLoggedInUser();
  }

  submitRequestEvent(form) {
    form = { ...form.value, 'request-organizer': 'Rsg', 'request-attendee': null};
    this.eventServiceService.createRequest(form);
    console.log(form);
    form.reset();
  }

}
