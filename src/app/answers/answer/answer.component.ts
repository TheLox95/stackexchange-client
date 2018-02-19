import { Component, OnInit, Input } from "@angular/core";
import { Answer } from "../Answer";

@Component({
  selector: "app-answer",
  template: `<div class="ui segment" [innerHtml]="answer.body"></div>
  <div class="ui raised secondary piled segment">
    <sui-accordion [closeOthers]="false">
      <sui-accordion-panel [isOpen]="true">
        <div title>
          <i class="dropdown icon"></i>
          Comments
        </div>
        <div content>
          <div class="ui comments" *ngFor="let commentObj of answer.comments">
            <app-comment [comment]="commentObj"></app-comment>
          </div>
        </div>
      </sui-accordion-panel>
    </sui-accordion>
  </div>`
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer;
  constructor() {}

  ngOnInit() {}
}
