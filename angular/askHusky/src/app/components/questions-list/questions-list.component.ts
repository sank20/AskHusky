import { Component, OnInit } from '@angular/core';
import {Question} from '../../classes/question.model';
import {QuestionService} from '../../services/question.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  questions: Array<Question>;
  selectedQuestion: Question;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.list().subscribe(questions => {
      this.questions = questions;
      console.log(questions);
    });
  }

}
