import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Provider, ServiceOfProvider } from '../../entity/provider';
import { User } from '../../entity/user';
import { ApiService } from '../api/api.service';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
  })
export class ProviderService
{
  
    currentProviderSubject:Subject<Provider> = new Subject<Provider>();
    currentServiceOfProviderSubject:Subject<ServiceOfProvider> = new Subject<ServiceOfProvider>();

    currentServiceOfService:ServiceOfProvider = null;
    currentProvider:Provider= null;
    isProvider=false;
    
    constructor(private api: ApiService,private userService:UserService){
      this.userService.currentUserSubject.subscribe((userData:any)=>{
        if(userData && userData.isProvider)
        {
          this.isProvider=true;
          this.currentProvider=new Provider();
          this.currentProvider.hydrate(userData);
          this.emitCurrentProvider();
          this.getServiceOfProviderFromApi();
        }
      })
    }

    getServiceOfProviderFromApi(): Promise<any>
    {
      return new Promise((resolve, reject) => {
        this.api.get(`provider/service/${this.currentProvider._id}`)
        .subscribe((result)=>{
          if(result && result.resultCode==0)
          {
            this.currentServiceOfService = new ServiceOfProvider();
            this.currentServiceOfService.hydrate(result.result);
            this.emitCurrentServiceOfProvider();
            result(true);
          } 
          else reject(result)
        })
      })
    }

    becomeProvider(provider:Provider): Promise<any>
    {
      return new Promise<any>((resolve,reject)=>{
        this.api.post("auth/provider",provider.toString())
        .subscribe((result)=>{
          if(result && result.resultCode==0)
          {
            this.currentProvider=provider;
            this.emitCurrentProvider();
            resolve(true);
          }
          else reject(result);
        }, (error: any)=> reject(error))
      })
    }

    emitCurrentProvider()
    {
      this.currentProviderSubject.next(this.currentProvider);
    }

    emitCurrentServiceOfProvider()
    {
      this.currentServiceOfProviderSubject.next(this.currentServiceOfService);
    }
}