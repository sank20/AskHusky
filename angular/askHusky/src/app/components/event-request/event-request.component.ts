import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-request',
  templateUrl: './event-request.component.html',
  styleUrls: ['./event-request.component.scss']
})


export class EventRequestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  submitEvent(form){
    console.log(form.value);
    alert("The form was submitted");
    form.reset();
  }


}
