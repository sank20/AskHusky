import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../classes/question.model';
import {QuestionService} from '../../services/question.service';
import {RouterModule} from '@angular/router';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons/faArrowCircleUp';
import {faArrowCircleDown} from '@fortawesome/free-solid-svg-icons/faArrowCircleDown';
import {Answer} from '../../classes/answer.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  private selectedQuestion: Question;
  constructor(private router: RouterModule, private questionService: QuestionService) { }
  faArrowCircleUp = faArrowCircleUp;
  faArrowCircleDown = faArrowCircleDown;
  // @Input() selectedQuestion: Question;
  ngOnInit() {
    this.selectedQuestion = this.questionService.getSelectedQuestion();
  }

  upvote(answer: Answer) {
    console.log("upvote!");
    let newScore: number = answer.upvotes;
    newScore++;
    answer.upvotes = newScore;
    this.questionService.updateAnswer(this.selectedQuestion.id, answer).subscribe((d) => console.log(d));;
    // for (ans of this.selectedQuestion.answers){
    //
    // }
  }

  downvote(answer: Answer) {
    console.log("downvote!");
    console.log("upvote!");
    let newScore: number = answer.downvotes;
    newScore++;
    answer.downvotes = newScore;
    this.questionService.updateAnswer(this.selectedQuestion.id, answer).subscribe((d) => console.log(d));;
  }
}
