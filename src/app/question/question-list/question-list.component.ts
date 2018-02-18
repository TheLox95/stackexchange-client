import {Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../Question';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-question-list',
  template: `<p>
  question-list works!
</p>
  <ul *ngFor="let questionObj of questions$ | async">
    <li><a [innerHTML]="questionObj.title" routerLink="/question/{{questionObj.question_id}}" >  </a></li>
</ul>
`,
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions$ : Observable<Question[]>;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questions$ = this.questionService.getList();
  }


}
