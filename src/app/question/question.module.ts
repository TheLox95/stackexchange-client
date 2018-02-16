import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { QuestionComponent } from './question.component';
import { QuestionService } from './question.service';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionListComponent } from './question-list/question-list.component';


@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule
  ],
  declarations: [
    QuestionListComponent,
    QuestionComponent
  ],
  providers: [ QuestionService ]
})
export class QuestionModule {}