import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceOfProvider } from '../../../../../shared/entity/provider';
import { User } from '../../../../../shared/entity/user';
import { PackageService } from '../../../../../shared/service/back-office/package.service';
import { ProviderService } from '../../../../../shared/service/back-office/provider.service';
import { TransactionService } from '../../../../../shared/service/back-office/transaction.service';
import { UserService } from '../../../../../shared/service/user/user.service';

declare var $: any;

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
  waitingProviderInfos:boolean=false;
  findProviderInfosMessage:String="";


  
  firstName: string = 'Provider';
  lastName: string = 'Name';
  name = this.firstName + ' ' + this.lastName;
  userAddress: string = 'Mandja';
  userCity: string = 'Bangangte';
  userCountry: string = 'Cameroon';
  userZip: string = '0000';
  userPhone: string = '(+237) 691 224 472';
  userCoverImg: string = 'assets/img/userCoverImg1.png';
  userProfileImg: string = '../../../../assets/img/user_image.png';
  userName: string = 'Flambel55';
  userEmail: string = '';
  userLabel: string = 'Trust me and your parcels will be delivered on time.';

  message: string = '\<b>Error\</b>\<br>Someone was not going. This option is not available.';


  @ViewChild('myModal') modal;

  constructor(
    private packageService:PackageService, 
    private userService:UserService,
    private providerService:ProviderService,
    private router:Router,
    private transactionService:TransactionService) { }

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
      this.selectedProvider=provider;
      this.viewedProvider=provider;
      this.selectedUserInfos=result;
      this.waitingProviderInfos=false;
      this.userEmail = result.field_email;
      this.userCity = result.field_city;
      this.userCountry = result.field_country;
      this.userPhone = result.field_phone;
      this.firstName = result.field_firstName;
      this.lastName = result.field_surName;
      // console.log("Result ",result)
    })
    .catch((err)=>{
      this.waitingProviderInfos=false;
      this.findProviderInfosMessage=err.message;
      // console.log("Error",err)
    })
  }
  selectProvider(event,provider)
  {
    if(event.target.checked) this.selectedProvider=provider;
    else this.selectedProvider=null;
  }
  showNotification(from, align, colortype, icon, text) {

    $.notify({
      icon: icon,
      message: text
    }, {
      type: colortype,
      timer: 500,
      placement: {
        from: from,
        align: align
      }
    });
  }
  confirmAction()
  {
    this.waitingProviderInfos=true;
    // this.providerService.setCurrentSelectedProvider(this.selectedProvider);
    // 
    // console.log("Provider ",this.selectedProvider,this.userService.getUserInformations())
    this.transactionService.startTransaction(
      this.selectedProvider.providerId,
      this.userService.getUserInformations().id,
      this.packageService.getPackageInformations().idService,
      this.userService.getUserInformations().id)
      .then((result)=>{
        this.waitingProviderInfos=false;
        this.showNotification('top','center', 'success', 'pe-7s-close-circle', '\<b>Success\</b>\<br>Provider has been successfully notified')
        setTimeout(() => this.router.navigate(['dashboard']), 600);
      }).catch((error)=>{
        this.waitingProviderInfos=false;
      this.showNotification('top','center', 'danger', 'pe-7s-close-circle', '\<b>Sorry\</b>\<br>'+error.message)

      })
  }
}
