import { Observable } from "rxjs/Observable";
import { Question } from "./Question";

export default interface QuestionServiceInterface{
  getList(site: string, page: number): Observable<Question[]>;
}
