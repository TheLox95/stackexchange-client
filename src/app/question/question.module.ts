import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { QuestionComponent } from './question.component';
import { QuestionService } from './question.service';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionListComponent } from './question-list/question-list.component';
import { SuiModule } from 'ng2-semantic-ui';
import { MiniOwnerComponent } from '../owner/mini-owner/mini-owner.component';
import { CommentComponent } from './comment/comment/comment.component';
import { AnswerComponent } from '../answers/answer/answer.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';


@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SuiModule
  ],
  declarations: [
    QuestionListComponent,
    QuestionComponent,
    MiniOwnerComponent,
    CommentComponent,
    AnswerComponent,
    CommentListComponent
  ],
  providers: [ QuestionService ]
})
export class QuestionModule {}
