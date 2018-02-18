import {ActivatedRoute} from '@angular/router';
import {RouterLinkStubDirective, RouterOutletStubComponent} from '../../router-stubs';
import {Owner} from '../../owner/Owner';
import { Answer } from "./../../answers/Answer";
import { Question } from "./../Question";
import { QuestionService } from "../question.service";
import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  inject
} from "@angular/core/testing";

import { QuestionListComponent } from "./question-list.component";
import { HttpClient } from "@angular/common/http";
import { MockBackend } from "@angular/http/testing";
import { Observable } from "rxjs/Observable";
import { MockQuestionService } from '../MockQuestionService';

describe("QuestionListComponent", () => {
  let component: QuestionListComponent;
  let fixture: ComponentFixture<QuestionListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [QuestionListComponent, RouterLinkStubDirective, RouterOutletStubComponent],
        providers: [{ provide: QuestionService, useClass: MockQuestionService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

