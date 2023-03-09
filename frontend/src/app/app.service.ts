import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IHelloMessage } from "./interfaces/iHelloMessage";
import { ISocketMessage } from "./interfaces/iSocketMessage";
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Socket } from "ngx-socket-io";


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl: string = 'http://localhost:3007/'
  // private subject: AnonymousSubject<MessageEvent>;
  // public messages: Subject<ISocketMessage>;



  constructor(
    private httpClient: HttpClient,
    private socket: Socket
  ) { }

  public getHelloMessage(): Observable<IHelloMessage> {
    return <Observable<IHelloMessage>> this.httpClient.get(this.apiUrl)
  }

  // listen event
  onScoreRoomEvent(): Observable<any> {
    return this.socket.fromEvent('scoreRoom');
  }
}
