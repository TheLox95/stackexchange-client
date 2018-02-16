import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {

  constructor(private _http: HttpClient) {
    this.get();
  }

  get() {
    this._http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });
  }
}
