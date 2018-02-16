import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { QuestionListComponent }      from './question/question-list/question-list.component';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {path: '', redirectTo: '/questions', pathMatch: 'full'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
