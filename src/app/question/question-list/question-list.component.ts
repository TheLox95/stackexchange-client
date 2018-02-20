import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import { QuestionService } from "../question.service";
import { Question } from "../Question";
import { Observable } from "rxjs/Observable";
import {
  SuiModalService,
  TemplateModalConfig,
  ModalTemplate
} from "ng2-semantic-ui";

export interface IContext {
  question: Question;
}

@Component({
  selector: "app-question-list",
  template: `
  <div *ngIf="questions$ | async as questions; else loading" >
  <div *ngFor="let questionObj of questions" class="ui relaxed divided list">
    <div class="item">
      <i class="circular inverted teal checkmark icon" *ngIf="questionObj.accepted_answer_id" suiPopup popupHeader="Is Answered"></i>
      <i class="minus large circle inverted grey icon" *ngIf="questionObj.answer_count == 0" suiPopup popupHeader="No answers"></i>
      <div class="content">
        <a class="header" [innerHTML]="questionObj.title" (click)="open(questionObj)"></a>
        <div class="description">Posted on {{questionObj.creation_date * 1000 | date}}</div>
      </div>
    </div>
    <ng-template let-context let-modal="modal" #modalTemplate>
    <div class="header" [innerHtml]="context.question.title + ' asked by ' + context.question.owner.display_name" suiPopup [popupTemplate]="popupTemplate" popupTrigger="click"></div>
    <sui-tabset>
    <div class="ui top attached tabular menu">
        <a class="item" suiTabHeader="1">Question</a>
        <a class="item" suiTabHeader="2" [isDisabled]="context.question.answers == 0">
          {{context.question.answers == 0 ? "No answers" : "Answers"}}
        </a>
    </div>
    <div class="ui bottom attached segment" suiTabContent="1">
      <div class="content">
        <app-question [question]="context.question"></app-question>
      </div>
    </div>
    <div class="ui bottom attached segment" suiTabContent="2">
      <div class="ui segment" *ngFor="let answer of context.question.answers">
        <app-answer [answer] ="answer"></app-answer>
      </div>
    </div>
    </sui-tabset>
    <div class="actions">
        <button class="ui secondary button" (click)="modal.approve('approved')" autofocus>Close</button>
    </div>
    <ng-template let-popup #popupTemplate>
      <app-mini-owner [owner]="context.question.owner"></app-mini-owner>
    </ng-template>
  </ng-template>
</div>
</div>
<ng-template #loading>
<div class="ui active inverted dimmer">
    <div class="ui text loader"> Getting questions</div>
  </div>
</ng-template>
`,
styles: ['.loading{ padding: 50px;}']
})
export class QuestionListComponent implements OnInit {
  questions$: Observable<Question[]>;
  @ViewChild("modalTemplate")
  public modalTemplate: ModalTemplate<IContext, string, string>;
  _question;
  private _currentPage: number;

  constructor(
    private questionService: QuestionService,
    public modalService: SuiModalService
  ) {}

  ngOnInit() {
    this.questions$ = this.questionService.getList(this._currentPage);
  }

  public open(dynamicContent: Question) {
    const config = new TemplateModalConfig<IContext, string, string>(
      this.modalTemplate
    );

    config.closeResult = "closed!";
    config.isFullScreen = true;
    config.context = { question: dynamicContent };

    this.modalService.open(config);
  }
}
