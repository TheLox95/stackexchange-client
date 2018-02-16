import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-list',
  template: `<p>
  question-list works!
</p>
`,
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.get().subscribe(this.logResult);
  }

  logResult(res){
    console.log(res);
  }

}
