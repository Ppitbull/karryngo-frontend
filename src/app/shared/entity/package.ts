// package representation
export class Package {
    field_owner: string;
    field_id: string;
    field_status: string;
    field_name: string;
    field_price: string;
    field_countryStart: string;
    field_cityStart: string;
    field_latStart: any;
    field_longStart: any;
    field_countryArrived: string;
    field_cityArrived: string;
    field_latArrived: any;
    field_longArrived: any;
    field_isWeak: boolean;
    field_isUrgent: boolean;
    field_delayDate: Date;
    field_recipientName: string;
    field_recipientContact: string;
    field_typePartSupply: string;
    field_typeof: string;
    field_vehicleType: string;
    field_heightPackages: number;
    field_widhtPackage: number;
    field_weightPackage: number;
    field_lengthPackage: number;
    field_numberPackage: number;
    field_image: any[];
    field_descriptionPackage: string;
    
    static hydrate(entity:Record<string,any>):Package
    {
        let pac:Package=new Package();
        for(const key in entity)
        {
            Reflect.set(pac,key,entity[key]);
        }
        return pac;
    }
}
