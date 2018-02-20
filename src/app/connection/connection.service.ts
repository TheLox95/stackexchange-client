import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';



@Injectable()
export class ConnectionService {
  constructor(private _http: HttpClient) {}

  public onConnectionStateChange(): Observable<boolean> {
    return Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').map(() => true),
      Observable.fromEvent(window, 'offline').map(() => false));
  }
}
