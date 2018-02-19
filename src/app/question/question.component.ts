import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuestionService } from "./question.service";
import {
  SuiModule,
  ModalTemplate,
  SuiModalService,
  TemplateModalConfig
} from "ng2-semantic-ui";

export interface IContext {
  data: string;
}

@Component({
  selector: "app-question",
  template: `<div class="ui grid">
  <div class="left floated six wide column" [innerHtml]="question.body"></div>
  <div class="container six wide column" >

      <div class="ui raised secondary piled segment right floated">
      <sui-accordion [closeOthers]="false">
        <sui-accordion-panel [isOpen]="true">
        <div title>
            <i class="dropdown icon"></i>
            Comments
        </div>
        <div content>
        <div class="ui comments" *ngFor="let comment of question.comments">
        <app-comment [comment]="comment"></app-comment>
        </div>
        </div>
        </sui-accordion-panel>
        </sui-accordion>
      </div>
  </div>
</div>`
})
export class QuestionComponent {
  @Input() question;

}
