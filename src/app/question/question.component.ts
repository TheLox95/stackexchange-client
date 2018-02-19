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
      <app-comment-list [comments]="question.comments"></app-comment-list>
      </div>
  </div>
</div>`
})
export class QuestionComponent {
  @Input() question;

}
