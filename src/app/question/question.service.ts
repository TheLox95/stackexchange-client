import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { ApiStackexchangeQuestions } from '../definitions/StackExchangeApi';
import Parser from './Parser';
import { Observable } from 'rxjs/Observable';
import { Question } from './Question';

@Injectable()
export class QuestionService {

  constructor(private _http: HttpClient) {
  }

  getList() {
    return this._http.get<ApiStackexchangeQuestions>('http://localhost:4585/questions').map(this.toQuestion);
  }

  get(id: number) {
    return this._http.get<ApiStackexchangeQuestions>('http://localhost:4585/question').map(this.toQuestion).map(this.getOne);
  }

  private toQuestion(res: ApiStackexchangeQuestions){
    const parser = new Parser();
    return res.items.map(parser.parse);
  }

  private getOne(questions : Question[]){
    return questions[0];
  }
}
