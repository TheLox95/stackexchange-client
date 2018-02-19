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
  template: `<p>
  question-list works!
</p>
  <ul *ngFor="let questionObj of questions$ | async">
    <li><a [innerHTML]="questionObj.title" (click)="open(questionObj)"></a></li>
    <ng-template let-context let-modal="modal" #modalTemplate>
    <div class="header" [innerHtml]="context.question.title + ' asked by ' + context.question.owner.display_name" suiPopup [popupTemplate]="popupTemplate" popupTrigger="click"></div>
    <sui-tabset>
    <div class="ui top attached tabular menu">
        <a class="item" suiTabHeader="1">Question</a>
        <a class="item" suiTabHeader="2">Answers</a>
    </div>
    <div class="ui bottom attached segment" suiTabContent="1">
    <div class="content">
        <div class="ui grid">
          <div class="left floated six wide column" [innerHtml]="context.question.body"></div>
          <div class="container six wide column" >

              <div class="ui raised secondary piled segment right floated">
              <sui-accordion [closeOthers]="false">
                <sui-accordion-panel [isOpen]="true">
                <div title>
                    <i class="dropdown icon"></i>
                    Comments
                </div>
                <div content>
                <div class="ui comments" *ngFor="let comment of context.question.comments">
                <div class="comment">
                  <a class="avatar">
                    <img src="{{comment.owner.profile_image}}">
                  </a>
                  <div class="content">
                    <a class="author">{{comment.owner.display_name}}</a>
                    <div class="metadata">
                      <span class="date">{{comment.creation_date}}</span>
                    </div>
                    <div class="text" [innerHtml]="comment.body"></div>
                  </div>
                </div>
                </div>
                </div>
                </sui-accordion-panel>
                </sui-accordion>
              </div>
          </div>
        </div>
    </div>
    </div>
    <div class="ui bottom attached segment" suiTabContent="2">
    <div class="ui segment">

    <div *ngFor="let answer of context.question.answers">
      <div class="ui segment" [innerHtml]="answer.body"></div>
      <div class="ui raised secondary piled segment">
      <sui-accordion [closeOthers]="false">
                <sui-accordion-panel [isOpen]="true">
                <div title>
                    <i class="dropdown icon"></i>
                    Comments
                </div>
                <div content>
                <div class="ui comments" *ngFor="let commentObj of answer.comments">
                <div class="comment">
                  <a class="avatar">
                    <img src="{{commentObj.owner.profile_image}}">
                  </a>
                  <div class="content">
                    <a class="author">{{commentObj.owner.display_name}}</a>
                    <div class="metadata">
                      <span class="date">{{commentObj.creation_date}}</span>
                    </div>
                    <div class="text" [innerHtml]="commentObj.body"></div>
                  </div>
                </div>
                </div>
                </div>
                </sui-accordion-panel>
                </sui-accordion>
                </div>
    </div>
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
</ul>
`,
  styleUrls: ["./question-list.component.css"]
})
export class QuestionListComponent implements OnInit {
  questions$: Observable<Question[]>;
  @ViewChild("modalTemplate")
  public modalTemplate: ModalTemplate<IContext, string, string>;
  _question;

  constructor(
    private questionService: QuestionService,
    public modalService: SuiModalService
  ) {}

  ngOnInit() {
    this.questions$ = this.questionService.getList();
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
