import { Observable } from "rxjs/Observable";
import { Question } from "./Question";

export default interface QuestionServiceInterface{
  getList(): Observable<Question[]>;
  get(id: number);
}
