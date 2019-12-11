import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../classes/question.model';
import {QuestionService} from '../../services/question.service';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  private selectedQuestion: Question;
  constructor(private router: RouterModule, private questionService: QuestionService) { }

  // @Input() selectedQuestion: Question;
  ngOnInit() {
    this.selectedQuestion = this.questionService.getSelectedQuestion();
  }

}
