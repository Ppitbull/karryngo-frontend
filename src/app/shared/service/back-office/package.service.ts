import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ToastrService } from 'ngx-toastr';
import { Package } from '../../../shared/entity/package';



@Injectable({
    providedIn: 'root'
})
export class PackageService {

    public static currentPackage: Package = new Package();
    params: any;
    packages: any[];
    packageData: any;

    constructor(
        private api: ApiService,
        private toastr: ToastrService
    ) { }

    // Get all packages.
    getPackages() {
        const headers = {
            'Content-Type': 'application/hal+json',
            // 'X-CSRF-Token': 'FWjJkOClVTMzyhEPEhz_OPR3PulweXUqi-NePcofKU8' || JSON.parse(localStorage.getItem('app-token')),
            // 'Accept': 'application/json',
        };

        // Id à utiliser dans pour avoir les packages correspondant
        // const id = JSON.parse(localStorage.getItem('package-data')).id;

        this.api.get('user/packages', headers)
        .subscribe(response => {
            this.packages = response.json();
        }, error => {
            this.toastr.success(error.message);
            console.log('Several error: ', error);
        });
    }

    // Set the package informations.
    setPackageInformations(currentPackage: any) {
        localStorage.setItem('package-data', JSON.stringify(currentPackage));
    }

    /*
   *  get the package informations.
   */
    getPackageInformations() {
        return JSON.parse(localStorage.getItem('package-data'));
    }


    /*
    *  Get local package data.
    */
    getLocalStoragePackage() {
        this.packageData = JSON.parse(localStorage.getItem('package-data'));
    }

    // permet d'enregistrer un package en creant son compte
    packageCreation(data: Package): Promise<any> {
        return new Promise((resolve, reject) => {

            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('access-token'),
                'Content-Type': 'application/json',
                // 'X-CSRF-Token': 'FWjJkOClVTMzyhEPEhz_OPR3PulweXUqi-NePcofKU8' || JSON.parse(localStorage.getItem('app-token')),
                // 'Accept': 'application/json',
            };
            this.params = {
                'address':
                {
                    'from':
                    {
                        'country': data.field_countryStart,
                        'city': data.field_cityStart,
                        'lat': data.field_latStart,
                        'lg': data.field_longStart
                    },
                    'to':
                    {
                        'country': data.field_countryArrived,
                        'city': data.field_cityArrived,
                        'lat': data.field_latArrived,
                        'lg': data.field_longArrived
                    },
                },
                'options':
                {
                    'is_urgent': data.field_isUrgent,
                    'is_weak': data.field_isWeak,
                    'typeof': data.field_typeof,
                    'date': data.field_delayDate,
                    'car_type': data.field_vehicleType,
                    'size':
                    {
                        'height': data.field_heightPackages,
                        'depth': data.field_lengthPackage,
                        'width': data.field_widhtPackage,
                        'wight': data.field_weightPackage,
                        'piece_nber': data.field_numberPackage,
                    },
                    'description': data.field_descriptionPackage,
                    'images': data.field_image,
                    // 'price': data.field_price
                }

            };
            this.api.post('requester/service/add', this.params, headers)
            .subscribe(success => {
                if(success.resultCode === 0)
                {
                    console.log(success.result)
                    this.setPackageInformations(success.result);
                    //this.toastr.success('You have been successfully Register your package!');
                    resolve(success);
                }
                else
                {
                    reject(success);
                }
            }, error => {
                //this.toastr.success(error.message);
                reject(error);
            });
            /**/
        });
    }


    // permet d'update les infos d'un package
    UpdatePackage(nid: string, token: string, data: any): Promise<any> {

        return new Promise((resolve, reject) => {

            const headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/hal+json',
                // 'Accept': 'application/json',
                // 'X-CSRF-Token': 'FWjJkOClVTMzyhEPEhz_OPR3PulweXUqi-NePcofKU8' || JSON.parse(localStorage.getItem('app-token'))
            };

            // const cheminUrl = `${this.api.url}/rest/type/package/package`;
            this.params = {
                // '_links': {
                //     'type': {
                //         'href': cheminUrl
                //     }
                // },
                'address': [
                    {
                        'from': [
                            {
                                'country': data.field_countryStart,
                                'city': data.field_cityStart,
                                'lat': data.field_latStart,
                                'lg': data.field_longStart
                            }
                        ],
                        'to': [
                            {
                                'country': data.field_countryArrived,
                                'city': data.field_cityArrived,
                                'lat': data.field_latArrived,
                                'lg': data.field_longArrived
                            }
                        ],
                    }
                ],
                'options': [
                    {
                        'is_urgent': data.field_isUrgent,
                        'is_fragile': data.field_isWeak,
                        'typeof': data.field_typeof,
                        'date': data.field_delayDate,
                        'car_type': data.field_vehicleType,
                        'size': [
                            {
                                'height': data.field_heightPackages,
                                'depth': data.field_lengthPackage,
                                'width': data.field_widhtPackage,
                                'wight': data.field_weightPackage,
                                'piece_nber': data.field_numberPackage,
                            }
                        ],
                        'detail': data.field_descriptionPackage,
                        'images': data.field_image,
                        // 'price': data.field_price
                    }
                ]
            };
            this.api.patch(`package/${nid}`, JSON.stringify(this.params), headers).subscribe(success => {
                resolve(success);
            }, error => {
                reject(error);
            });
        });
    }

}
