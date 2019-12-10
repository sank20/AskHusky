import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private baseUri = 'http://localhost:3000';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

createRequest(form : object){
    return this.http.post(this.baseUri + '/event-request', form, {headers: this.headers});
  }

}
