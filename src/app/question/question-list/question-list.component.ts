import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../Question';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-question-list',
  template: `<p>
  question-list works!
</p>  
  <ul *ngFor="let question of _questions$ | async">
    <li><a [innerHTML]="question.title" href="{{question.link}}">  </a></li>
</ul>
`,
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  private _questions$ : Observable<Question[]>;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this._questions$ = this.questionService.get();
  }


}
