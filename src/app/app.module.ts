import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { QuestionService } from './question/question.service';
import { QuestionModule } from './question/question.module';
import {SuiModule} from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuestionModule,
    SuiModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
