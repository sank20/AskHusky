import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../classes/question.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private baseUri = 'http://localhost:3000';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private selectedQuestion: Question;
  constructor(private http: HttpClient) { }
  public list(): Observable<Array<Question>> {
    const questions$ = this.http
      .get<Array<Question>>(environment.apiHostUrl + '/questions/');
    return questions$;
  }

  fetchTags() {
    return this.http.get(this.baseUri + '/tags', {headers: this.headers});
  }

  createQuestion(data: any) {
    return this.http.post(this.baseUri + '/questions', data, {headers: this.headers});
  }

  storeSelectedQuestion(selectedQuestion: Question) {
   this.selectedQuestion = selectedQuestion;
  }
  getSelectedQuestion() {
    return this.selectedQuestion;
  }
}
