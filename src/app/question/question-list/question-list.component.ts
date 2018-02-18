import {Router, ActivatedRoute} from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../Question';
import { Observable } from 'rxjs/Observable';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';

export interface IContext {
  question: Question;
}

@Component({
  selector: 'app-question-list',
  template: `<p>
  question-list works!
</p>
  <ul *ngFor="let questionObj of questions$ | async">
    <li><a [innerHTML]="questionObj.title" (click)="open(questionObj)"></a></li>
    <ng-template let-context let-modal="modal" #modalTemplate>
    <div class="header" [innerHtml]="context.question.title"></div>
    <div class="content">
        <p [innerHtml]="context.question.body"></p>
    </div>
    <div class="actions">
        <button class="ui secondary button" (click)="modal.approve('approved')" autofocus>Close</button>
    </div>
</ng-template>
</ul>
`,
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions$ : Observable<Question[]>;
  @ViewChild("modalTemplate")
  public modalTemplate: ModalTemplate<IContext, string, string>;
  _question;

  constructor(private questionService: QuestionService, public modalService: SuiModalService) { }

  ngOnInit() {
    this.questions$ = this.questionService.getList();
  }

  public open(dynamicContent: Question) {
    const config = new TemplateModalConfig<IContext, string, string>(
      this.modalTemplate
    );

    config.closeResult = "closed!";
    config.context = { question:  dynamicContent};

    this.modalService
      .open(config);
  }


}
