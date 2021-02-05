import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
    providedIn: 'root'
  })
export class  TransactionService {
    headers={
        'Authorization': 'Bearer ',
        'Content-Type': 'application/json'
    }
    constructor(
        private apiService:ApiService
    ){}
    startTransaction(providerId:String,requesterId:String,serviceId:String,initiatorId:String):Promise<any>
    {
        this.headers['Authorization']+=this.apiService.getAccessToken();

        return new Promise<any>((resolve,reject)=>{
            this.apiService.post("requester/service/transaction/start",{
                "idService":serviceId,
                "idProvider":providerId,
                "idRequester":requesterId,
                "idInitiator":initiatorId
            },this.headers)
            .subscribe((result)=>{
                if(result && result.resultCode==0) resolve(result);
                else reject(result);
            }, (error: any) => reject(error));
            
        })
    }
}