import { Component, OnInit } from '@angular/core';
import {EventServiceService} from '../../services/event-service.service';
import {Router} from '@angular/router';
import {EventRequest} from '../../classes/eventRequest';
import {User} from '../../classes/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-event-view-requests',
  templateUrl: './event-view-requests.component.html',
  styleUrls: ['./event-view-requests.component.scss']
})
export class EventViewRequestsComponent implements OnInit {

  constructor(private eventServiceService: EventServiceService, private userService: UserService, private router: Router) { }

  private user: User ;
  organizerList: Array<EventRequest>;
  attendeeList: Array<EventRequest>;
  ngOnInit() {

    this.user = this.userService.getterUser();
    // @ts-ignore
    this.eventServiceService.listOrganizer(user.userName).subscribe( orgList => {
      this.user = this.userService.getterUser();
    });
    this.eventServiceService.listAttendee(this.user.userName).subscribe(attList => {
      this.attendeeList = attList;
    });
  }


    public isInitiated(intitiated: string) {
    if (intitiated === 'INITIATED') {return true; } else { return false; }
  }


    public acceptRequest(evtObj: EventRequest) {
    this.eventServiceService.changeRequestReason(evtObj, 'ACCEPTED').subscribe((eventObj) => evtObj = eventObj);
    this.eventServiceService.listAttendee(this.user.userName).subscribe(attList => {
      this.attendeeList = attList;
    });
  }
    public rejectRequest(evtObj: EventRequest) {
    this.eventServiceService.changeRequestReason(evtObj, 'REJECTED').subscribe((eventObj) => evtObj = eventObj);
    this.eventServiceService.listAttendee(this.user.userName).subscribe(attList => {
      this.attendeeList = attList;
    });
  }
}
