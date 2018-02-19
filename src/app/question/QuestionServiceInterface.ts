import { Observable } from "rxjs/Observable";
import { Question } from "./Question";

export default interface QuestionServiceInterface{
  getList(page: number): Observable<Question[]>;
  get(id: number);
}
