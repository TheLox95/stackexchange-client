import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { QuestionService } from './question/question.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
