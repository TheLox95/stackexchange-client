import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question.component';

const heroesRoutes: Routes = [
    { path: 'questions',  component: QuestionListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class QuestionRoutingModule { }
