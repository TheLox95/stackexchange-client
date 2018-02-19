import { Component, OnInit, Input } from "@angular/core";
import { Answer } from "../Answer";

@Component({
  selector: "app-answer",
  template: `<div class="ui segment" [innerHtml]="answer.body"></div>
  <div class="ui raised secondary piled segment">
    <app-comment-list [comments]="answer.comments"></app-comment-list>
  </div>`
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer;
  constructor() {}

  ngOnInit() {}
}
