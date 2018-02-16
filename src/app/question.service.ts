import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {

  constructor(private _http: HttpClient) {
  }

  get() {
    return this._http.get('http://localhost:4585/questions');
  }
}
