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

    // tslint:disable-next-line:max-line-length
    const newVar = {...form.value, organizer: this.user.userName, attendees: 'darshan24111993', requestStatus: 'INITIATED', questionID: '5dee8a09f79ddc1c04fa4996' };
    // tslint:disable-next-line:prefer-const one-variable-per-declaration
    newVar.date = new Date(newVar.date.year, newVar.date.month, newVar.date.day);
    form.time = (form.time.hour + ':' + form.time.minute + ':' + form.time.second );
    this.eventServiceService.createRequest(form).subscribe(
      data => console.log(data),
      error => console.log(error));
    // console.log(form);
    form.reset();
  }

}
