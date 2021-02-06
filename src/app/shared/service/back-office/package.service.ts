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
    
    packages: Map<String,Package>=new Map<String,Package>();
    packageData: any;
    posts: any[];

    constructor(
        private api: ApiService,
        private toastr: ToastrService
    ) { }

    findLocalPackagesById(id:String):Package
    {
        if(this.packages.has(id)) return this.packages.get(id);
        return null;
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
    getPackageList()
    {
        let list:Package[]=[];
        for(const key in this.packages)
        {
            list.push(this.packages.get(key));
        }
        return list;
    }
    
    parsePackageToApi(data:Package):Record<string,any>
    {
        return {
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
            },
            "suggestedPrice":data.field_price
        };
    }

    getAllPackagesUser(): Promise<any> {

        return new Promise((resolve, reject) => {
          const headers = {
            'Authorization': 'Bearer ' + this.api.getAccessToken(),
            'Content-Type': 'application/json',
            // 'Accept': 'application/json'
          };
          this.api.get('requester/service/list', headers)
          .subscribe((response: any) => {
              console.log("Response ",response)
            if (response) {
              resolve(response);
              this.posts = response.result;
              localStorage.setItem('packages-list', JSON.stringify(this.posts));
              this.saveAllPackagesUser(response);
            }
            return response;

          }, (error: any) => {

            if (error) {
              console.log(error);
              this.toastr.success(error.message);
              reject(error);
            }
          });
        });
      }


  /*
*  save to local the packages list object of user.
*/
saveAllPackagesUser(packageList: any) {
    localStorage.setItem('package-list', JSON.stringify(packageList));
    // console.log(localStorage.getItem('package-list'));
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
            console.log("Header ",headers);
            this.params = this.parsePackageToApi(data);

            this.api.post('requester/service/add', this.params, headers)
            .subscribe(success => {
                if(success.resultCode === 0)
                {
                    this.packages.set(success.result.idService,data);
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
    updatePackage(nid: string, data: Package): Promise<any> {

        return new Promise((resolve, reject) => {

            const headers = {
                'Authorization': 'Bearer ' + + localStorage.getItem('access-token'),
                'Content-Type': 'application/json'
            };
            console.log("Header ",headers);
            this.api.post(`requester/service/${nid}`, this.parsePackageToApi(data), headers)
            .subscribe(success => {
                if(success && success.resultCode==0)
                {
                    this.packages.set(success.result.idService,data);
                    this.setPackageInformations(success.result);
                    //this.toastr.success('You have been successfully Register your package!');
                    resolve(success);
                }
                else reject(success);
            }, error => {
                reject(error);
            });
        });
    }

}
