import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { ApiStackexchangeQuestions } from '../definitions/StackExchangeApi';
import Parser from './Parser';

@Injectable()
export class QuestionService {

  constructor(private _http: HttpClient) {
  }

  get() {
    return this._http.get<ApiStackexchangeQuestions>('http://localhost:4585/questions').map(this.toQuestion);
  }

  toQuestion(res: ApiStackexchangeQuestions){
    const parser = new Parser();
    return res.items.map(parser.parse);
  }
}
