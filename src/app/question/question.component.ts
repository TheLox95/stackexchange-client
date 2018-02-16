import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-question',
  template: `
    <p>
      question works!
    </p>
    <p>
    </p>
  `,
  styleUrls: ['./question.component.css']
})
export class QuestionComponent  {
  private _id;

  constructor() {
    //this.route.queryParams.subscribe(res => console.log(res.id));
   }

  getId() {
    //this._id = +this.route.snapshot.paramMap.get("id");
    
  }

}
