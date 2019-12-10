import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {User} from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {
  constructor(private http: HttpClient) { }

  private baseUri = 'http://localhost:3000';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private user: User;
  private token: string;

  public User;
  signupUser(user: User) {
      return this.http.post(this.baseUri + '/signup', user, {headers: this.headers});
    }

  loginUser(user: User) {
      return this.http.post(this.baseUri + '/login', user, {headers: this.headers});
  }

  changePassword(changePasswordObj: object) {
    return this.http.put(this.baseUri + '/changePassword', changePasswordObj, {headers: this.headers});
  }
getLoggedInUser() {
    return this.user;
  }
}
