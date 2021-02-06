import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
    providedIn: 'root'
  })
export class ChatService {
    headers ={};
    
    constructor(private api:ApiService) { 
        this.headers={
            'Authorization': 'Bearer ' + this.api.getAccessToken(),
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          };
    }

    getDiscutionList(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.api.get("chat/list",this.headers)
            .subscribe((success)=>{
                if(success && success.resultCode==0)
                {

                }
                else reject(success);
            }, (error: any)=> reject(error))
        })
    }
}
