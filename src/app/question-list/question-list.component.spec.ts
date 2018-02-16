import { QuestionService } from '../question.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';

import { QuestionListComponent } from './question-list.component';
import { HttpClient } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';
import { Question } from '../Question';

describe('QuestionListComponent', () => {
  let component: QuestionListComponent;
  let questionService: QuestionService;
  let spy: jasmine.Spy;
  let fixture: ComponentFixture<QuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionListComponent],
      providers: [{ provide: QuestionService, useClass: MockService }]
    )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


class MockService {

  get() {
    return new Observable<Question[]>(observer => {
      const question:Question = new Question();
      question.title = "asdasd";
      question.is_answered = true;
      question.view_count = 234;
      question.score = 234;
      question.last_activity_date = 234;
      question.question_id = 234;
      question.link = "asdasd";
      question.creation_date = 234;

      observer.next([question]);
      observer.complete();
    });
  }

}
