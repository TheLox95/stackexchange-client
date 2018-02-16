import { TestBed, inject } from '@angular/core/testing';

import { QuestionService } from './question.service';
import { HttpClient } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';

describe('QuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionService, {provide: HttpClient, deps: [MockBackend]}]
    });
  });

  it('should be created', inject([QuestionService, HttpClient], (service: QuestionService) => {
    expect(service).toBeTruthy();
  }));
});
