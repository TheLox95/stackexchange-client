import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { QuestionListComponent }      from './question-list/question-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'questions', component: QuestionListComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
