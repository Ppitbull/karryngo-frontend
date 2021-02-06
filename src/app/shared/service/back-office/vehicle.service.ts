import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ToastrService } from 'ngx-toastr';
import { Vehicle } from '../../entity/vehicle';



@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    public static currentVehicle: Vehicle = new Vehicle();
    params: any;

    vehicles: Map<String, Vehicle> = new Map<String, Vehicle>();
    vehicleData: any;
    posts: any[];

    constructor(
        private api: ApiService,
        private toastr: ToastrService
    ) { }

    findLocalVehiclesById(id: String): Vehicle {
        if (this.vehicles.has(id)) return this.vehicles.get(id);
        return null;
    }

    // Set the vehicle informations.
    setVehicleInformations(currentVehicle: any) {
        localStorage.setItem('vehicle-data', JSON.stringify(currentVehicle));
        console.log('response vehicle',currentVehicle)
    }

    /*
   *  get the vehicle informations.
   */
    getVehicleInformations() {
        return JSON.parse(localStorage.getItem('vehicle-data'));
    }


    /*
    *  Get local vehicle data.
    */
    getLocalStorageVehicle() {
        this.vehicleData = JSON.parse(localStorage.getItem('vehicle-data'));
    }
    getVehicleList() {
        let list: Vehicle[] = [];
        for (const key in this.vehicles) {
            list.push(this.vehicles.get(key));
        }
        return list;
    }

    parseVehicleToApi(data: Vehicle): Record<string, any> {
        return {
            'type': data.field_type,
            'name': data.field_name,
            'marque': data.field_marque,
            'photo': data.field_photo,
            'placeNumber': data.field_placeNumber,
            'description': data.field_description,
        }
    };

    getAllVehiclesUser(): Promise<any> {

        return new Promise((resolve, reject) => {
            const headers = {
                'Authorization': 'Bearer ' + this.api.getAccessToken(),
                'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            };
            this.api.get('provider/service/vehicle/list', headers)
                .subscribe((response: any) => {
                    console.log("Response ", response)
                    if (response) {
                        resolve(response);
                        this.posts = response.result;
                        localStorage.setItem('vehicles-list', JSON.stringify(this.posts));
                        this.saveAllVehiclesUser(response);
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
  *  save to local the vehicles list object of user.
  */
    saveAllVehiclesUser(vehicleList: any) {
        localStorage.setItem('vehicle-list', JSON.stringify(vehicleList));
        // console.log(localStorage.getItem('vehicle-list'));
    }


    // permet d'enregistrer un vehicle
    vehicleCreation(data: Vehicle): Promise<any> {
        return new Promise((resolve, reject) => {

            const headers = {
                'Authorization': 'Bearer ' + localStorage.getItem('access-token'),
                'Content-Type': 'application/json',
                // 'X-CSRF-Token': 'FWjJkOClVTMzyhEPEhz_OPR3PulweXUqi-NePcofKU8' || JSON.parse(localStorage.getItem('app-token')),
                // 'Accept': 'application/json',
            };
            this.params = this.parseVehicleToApi(data);

            this.api.post('provider/service/vehicle/add', this.params, headers)
                .subscribe(success => {
                    if (success.resultCode === 0) {
                        this.vehicles.set(success.result.idService, data);
                        console.log(success.result)
                        this.setVehicleInformations(success.result);
                        //this.toastr.success('You have been successfully Register your vehicle!');
                        resolve(success);
                    }
                    else {
                        reject(success);
                    }
                }, error => {
                    //this.toastr.success(error.message);
                    reject(error);
                });
            /**/
        });
    }


    // permet d'update les infos d'un vehicle
    updateVehicle(nid: string, data: Vehicle): Promise<any> {

        return new Promise((resolve, reject) => {

            const headers = {
                'Authorization': 'Bearer ' + + localStorage.getItem('access-token'),
                'Content-Type': 'application/json'
            };
            console.log("Header ", headers);
            this.api.post(`requester/service/${nid}`, this.parseVehicleToApi(data), headers)
                .subscribe(success => {
                    if (success && success.resultCode == 0) {
                        this.vehicles.set(success.result.idService, data);
                        this.setVehicleInformations(success.result);
                        //this.toastr.success('You have been successfully Register your vehicle!');
                        resolve(success);
                    }
                    else reject(success);
                }, error => {
                    reject(error);
                });
        });
    }

}
