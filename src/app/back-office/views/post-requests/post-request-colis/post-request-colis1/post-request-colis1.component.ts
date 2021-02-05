import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceOfProvider } from '../../../../../shared/entity/provider';
import { User } from '../../../../../shared/entity/user';
import { PackageService } from '../../../../../shared/service/back-office/package.service';
import { UserService } from '../../../../../shared/service/user/user.service';

@Component({
  selector: 'app-post-request-colis1',
  templateUrl: './post-request-colis1.component.html',
  styleUrls: ['./post-request-colis1.component.scss']
})
export class PostRequestColis1Component implements OnInit {

  providerList:{locationString?:string,vehiculeString?:string,provider?:ServiceOfProvider}[]=[]
  selectedProvider:ServiceOfProvider=null;
  selectedUserInfos:User=null;
  viewedProvider:ServiceOfProvider=null;
  waitingProviderInfos:boolean=true;
  findProviderInfosMessage:String="";

  @ViewChild('myModal') modal;

  constructor(private packageService:PackageService, private userService:UserService) { }

  ngOnInit() {
    this.providerList=this.packageService.getPackageInformations().providers.map(provider=>{
      let s1="",s2="";
      return {
        locationString:provider.zones.map((z)=>z.name).reduce((prev,next,i,s1)=> prev+","+next),
        vehiculeString:provider.vehicles.map(p=>p.name).reduce((prev,next,i,s2)=> prev+","+next),
        provider:ServiceOfProvider.hydrate(provider)
      }
    });
    console.log("ProviderList ",this.providerList);
  }
  cancelModel()
  {
    this.viewedProvider=null;
    this.modal.hide();
  }
  showProviderDetail(provider)
  {  
    this.modal.show();
    this.userService.getUserById(provider.providerId)
    .then((result)=>{
      this.viewedProvider=provider;
      this.selectedUserInfos=result;
      this.waitingProviderInfos=false;
      console.log("Result ",result)
    })
    .catch((err)=>{
      this.waitingProviderInfos=false;
      this.findProviderInfosMessage=err.message;
      console.log("Error",err)
    })
  }
  selectProvider(event,provider)
  {
    if(event.target.checked) this.selectedProvider=provider;
    else this.selectedProvider=null;
  }

}
