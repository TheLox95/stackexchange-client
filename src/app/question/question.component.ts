import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  template: `
    <p>
      question works!
    </p>
    <p>
    {{_question?.title}}
    </p>
    <p [innerHtml]="_question?.body">
    </p>
  `,
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  _question;

  constructor(private route: ActivatedRoute, private service: QuestionService) {
    this.route.params.subscribe(id => this.fetchQuestion(id));
  }

  fetchQuestion(value: { [key: string]: any }) {
    this.service.get(value.id).subscribe(question => this._question = question);
  }

}
