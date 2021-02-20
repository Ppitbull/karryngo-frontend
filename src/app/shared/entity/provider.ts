import { Entity } from './entity';

export class Address extends Entity 
{
    public email:String="";
    public mobilePhone:String="";
    public phone:String="";
    public websiteLink:String="";
    public whatsAppNumber:String="";
    public skypeNumber:String="";
    public zip:String="";
    public country:String="";
    public city:String="";
} 

export class Zone extends Entity
{
    _id:String="";
    long:String="";
    lat:String="";
    name:String="";
    country:String="";
    city:String="";
}

export class Vehicle extends Entity
{
    _id:String="";
    type:String="";
    name:String="";
    marque:String="";
    photo:String="";
}

export class ServiceOfProvider extends Entity
{
    _id:String="";
    title:String="";
    name:String="";
    description:String="";
    providerId:String="";
    zones:Zone[]=[];
    vehicles:Vehicle[]=[];

     hydrate(entity:Record<string,any>)
    {
        for(const key in entity)
        {
            if(key=="zones" && entity[key]!=null && entity[key]!=undefined) 
            {
                this.zones=entity[key].map(zone=>{
                    let z:Zone = new Zone();
                    z.hydrate(zone)
                    return z;
                });
            }
            if(key=="vehicles" && entity[key]!=null && entity[key]!=undefined) 
            {
                this.vehicles=entity[key].map(vehilcle=>{
                    let v:Vehicle = new Vehicle();
                    v.hydrate(vehilcle);
                    return v;
                });
            }
            else Reflect.set(this,key,entity[key]);
        }
    }
}

export class Provider extends Entity
{
    _id:String="";
    companyName:String="";
    registrationNumber:String="";
    importExportCompagnyCode:String="";
    adressForVerification:Address[]=[];
    isAcceptedProvider:boolean=false;
}