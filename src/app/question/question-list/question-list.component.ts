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
  <ul *ngFor="let question of _questions$ | async">
    <li><a [innerHTML]="question.title" routerLink="/question/{{question.question_id}}" >  </a></li>
</ul>
`,
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  private _questions$ : Observable<Question[]>;

  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._questions$ = this.questionService.getList();
  }

  showmeQuestion(){
    //this.router.navigate(['/question'], {queryParams: {id: 5}, skipLocationChange: true});
  }


}
