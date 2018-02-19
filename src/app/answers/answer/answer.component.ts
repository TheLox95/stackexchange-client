import { Component, OnInit, Input } from "@angular/core";
import { Answer } from "../Answer";

@Component({
  selector: "app-answer",
  template: `<div [ngClass]="{'ui segment green': answer.is_accepted, 'ui segment': answer.is_accepted }" [innerHtml]="answer.body"></div>
  <div class="ui raised secondary piled segment">
    <app-comment-list [comments]="answer.comments"></app-comment-list>
  </div>`
})
export class AnswerComponent implements OnInit {
  @Input() answer: Answer;
  constructor() {}

  ngOnInit() {}
}
