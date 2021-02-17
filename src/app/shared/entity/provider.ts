export class Zone
{
    _id:String="";
    long:String="";
    lat:String="";
    name:String="";
    country:String="";
    city:String="";
    static hydrate(entity:Record<string,any>):Zone
    {
        let pac:Zone=new Zone();
        for(const key in entity)
        {
            Reflect.set(pac,key,entity[key]);
        }
        return pac;
    }
}
export class Vehicle
{
    _id:String="";
    type:String="";
    name:String="";
    marque:String="";
    photo:String="";
    static hydrate(entity:Record<string,any>):Vehicle
    {
        let pac:Vehicle=new Vehicle();
        for(const key in entity)
        {
            Reflect.set(pac,key,entity[key]);
        }
        return pac;
    }
}

export class ServiceOfProvider
{
    _id:String="";
    title:String="";
    name:String="";
    description:String="";
    providerId:String="";
    zones:Zone[]=[];
    vehicles:Vehicle[]=[];
    static hydrate(entity:Record<string,any>):ServiceOfProvider
    {
        let pac:ServiceOfProvider=new ServiceOfProvider();
        for(const key in entity)
        {
            if(key=="zones" && entity[key]!=null && entity[key]!=undefined) 
            {
                pac.zones=entity[key].map(zone=>Zone.hydrate(zone));
            }
            if(key=="vehicles" && entity[key]!=null && entity[key]!=undefined) 
            {
                pac.vehicles=entity[key].map(vehilcle=>Vehicle.hydrate(vehilcle));
            }
            else Reflect.set(pac,key,entity[key]);
        }
        return pac;
    }
}

export class Provider 
{
    // title:String="";
    // name:String="Provider Name";
    // description:String="";
    // idProvider:String="";
    // deservedZone:Location[]=[];
    // listVehicle:Vehicle[]=[];

    // toString():Record<string,any>
    // {
    //     return {
    //         ...super.toString(),
    //         title:this.title,
    //         name:this.name,
    //         description:this.description,
    //         providerId:this.idProvider,
    //         zones:this.deservedZone.map((zone:Location)=>zone.toString()),
    //         vehicles:this.listVehicle.map((vehicle:Vehicle)=>vehicle.toString()),
    //     }
    // }
    // hydrate(entity:Record<string, any>):void
    // {
    //     super.hydrate(entity);
    //     this.title=this.purgeAttribute(entity,"title");
    //     this.name=this.purgeAttribute(entity,"name");
    //     this.description=this.purgeAttribute(entity,"description");
    //     this.idProvider=this.purgeAttribute(entity,"providerId");
    //     this.deservedZone=this.purgeAttribute(entity,"zones").map((zone:Record<string, any>)=>{
    //         let local:Location=new Location();
    //         local.hydrate(zone);

    //     });
    //     this.listVehicle=this.purgeAttribute(entity,"vehicles").map((vehicle:Record<string, any>)=>{
    //         let v:Vehicle=new Vehicle();
    //         v.hydrate(vehicle);
    //         return v;
    //     })

    // }
}