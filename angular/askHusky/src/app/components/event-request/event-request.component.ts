import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../../services/event-service.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {User} from '../../classes/user';

@Component({
  selector: 'app-event-request',
  templateUrl: './event-request.component.html',
  styleUrls: ['./event-request.component.scss']
})


export class EventRequestComponent implements OnInit {
  private user: User;
  constructor(private eventServiceService: EventServiceService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getterUser();
  }

  submitRequestEvent(form) {
    // tslint:disable-next-line:max-line-length
    const newVar = {...form.value, organizer: this.user.userName, attendees: 'rruchit001', requestStatus: 'INITIATED', questionID: '5dee8a09f79ddc1c04fa4996' };
    // tslint:disable-next-line:prefer-const one-variable-per-declaration
    newVar.date = new Date(newVar.date.year, newVar.date.month, newVar.date.day);
    newVar.time = ((newVar.time.hour + ':' + newVar.time.minute + ':' + '00') );
    this.eventServiceService.createRequest(newVar).subscribe(
      data => console.log(data),
      error => console.log(error));
    form.reset();
  }

}
