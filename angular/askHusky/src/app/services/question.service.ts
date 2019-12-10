import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../classes/question.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }
  public list(): Observable<Array<Question>> {
    const questions$ = this.http
      .get<Array<Question>>(environment.apiHostUrl + '/questions/');
    return questions$;
  }
}
