import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { ApiStackexchangeQuestions } from "../definitions/StackExchangeApi";
import Parser from "./Parser";
import { Observable } from "rxjs/Observable";
import { Question } from "./Question";
import QuestionServiceInterface from "./QuestionServiceInterface";
import { environment } from '../../environments/environment';

@Injectable()
export class QuestionService implements QuestionServiceInterface{
  constructor(private _http: HttpClient) {}

  getList(page: number) {
    return this._http
      .get<ApiStackexchangeQuestions>(environment.backEndUrlApi)
      .map(item => this.toQuestion(item));
  }

  get(id: number) {
    return this._http
      .get<ApiStackexchangeQuestions>("http://localhost:4585/question")
      .map(item => this.toQuestion(item))
      .map(this.getOne);
  }

  private toQuestion(res: ApiStackexchangeQuestions) {
    const parser = new Parser();
    res.items.map(item =>
      this.setEmptyArrayForPropertyInObject("comments", item)
    );
    res.items.map(item =>
      this.setEmptyArrayForPropertyInObject("answers", item)
    );

    res.items.map(item =>
      item.answers.map(answer => this.setEmptyArrayForPropertyInObject("comments", answer))
    );

    return res.items.map(parser.parse);
  }

  private getOne(questions: Question[]) {
    return questions[0];
  }

  setEmptyArrayForPropertyInObject(property: string, object: {}) {
    if(object[property] == undefined){
      object[property] = [];
    }
    return object;
  }
}
