import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Discussion, Message } from '../../entity/chat';
import { ApiService } from '../api/api.service';

@Injectable({
    providedIn: 'root'
  })
export class ChatService {
    listDiscusion:Discussion[]=[];
    listUnreadMessage:Message[]=[];
    listDiscusionSubject:Subject<Discussion[]>=new Subject<Discussion[]>();
    listMessageUnreadSubject:Subject<Message[]>=new Subject<Message[]>();
    headers ={};

    constructor(private api:ApiService) { 
        this.headers={
            'Authorization': 'Bearer ' + this.api.getAccessToken(),
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          };
          this.getUnReadDiscussion()
          .then((result)=>{
            this.listDiscusion=result.map((r)=>Discussion.hydrate(r));
            this.emitDiscussion();
          })
    }

    getDiscutionList(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.api.get("chat/list",this.headers)
            .subscribe((success)=>{
                if(success && success.resultCode==0)
                {
                    success.result.forEach((disc)=>this.listDiscusion.push(Discussion.hydrate(disc)))
                }
                else reject(success);
            }, (error: any)=> reject(error))
        })
    }
    getUnReadDiscussion(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.api.get("chat/unread",this.headers)
            .subscribe((success)=>{
                if(success && success.resultCode==0) resolve(success.result);
                else reject(success);
            }, (error: any)=>reject(error))
        })
    }
    getUnreadMessage()
    {
        this.listDiscusion.forEach((value:Discussion)=>{
            this.listUnreadMessage.concat(value.chats.filter((msg:Message)=>msg.read==0));
        })
        // this.listDiscusion.filter((value:Discussion,)=>)
    }
    emitDiscussion()
    {
        this.listDiscusionSubject.next(this.listDiscusion.slice());
    }

    markAsRead(): Promise<any>
    {
        return new Promise((resolve, reject)=>{

        })
    }
}
