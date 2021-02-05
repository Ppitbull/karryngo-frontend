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