import { Component, OnInit } from '@angular/core';
import {Question} from '../../classes/question.model';
import {QuestionService} from '../../services/question.service';
import {Answer} from '../../classes/answer.model';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  questions: Array<Question>;
  selectedQuestion: Question;
  topAnswer: Answer;

  // items = [];
  pageOfItems: Array<Question>;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.list().subscribe(questions => {
      this.questions = questions;
      console.log(questions);
      this.getTopAnswer();
    });
  }

  getTopAnswer() {
    for (let i = 0; i < this.questions.length; i++) {
    // for (const question of this.questions) {
      let topCount: number;
      topCount = 0;
      let topAnswer: Answer = null;
      for (const answer of this.questions[i].answers) {
        const cumulativeVote = answer.upvotes - answer.downvotes;
        if (cumulativeVote > topCount) {
          topCount = cumulativeVote;
          topAnswer = answer;
        }
      }
      console.log('top answer:');
      console.log(topAnswer);
      if (topAnswer != null) {
        this.questions[i].topAnswerId = topAnswer.id;
        this.questions[i].topAnswerUser = topAnswer.userName;
        this.questions[i].topAnswerContent = topAnswer.answer;
        console.log(this.questions[i]);
      } else {
        this.questions[i].topAnswerId = this.questions[i].answers[0].id;
        this.questions[i].topAnswerUser = this.questions[i].answers[0].userName;
        this.questions[i].topAnswerContent = this.questions[i].answers[0].answer;
      }
    }
  }

  onChangePage(pageOfItems: Array<Question>) {
    this.pageOfItems = pageOfItems;
  }
}
