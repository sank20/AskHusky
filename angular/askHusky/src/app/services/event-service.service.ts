import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

createRequest(form: object) {
    return this.http.post(environment.apiHostUrl + '/event-request', form, {headers: this.headers});
  }

}
