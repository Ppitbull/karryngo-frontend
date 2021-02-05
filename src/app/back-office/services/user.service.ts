import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { UserInfo } from '../_models/user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient, private router: Router) { }

    getByUserID(user_id: string) {
        return this.http.get(`${environment.apiUrl}/user/getById/` + user_id);
    }

    getByLoginID(login_id: string) {
        return this.http.get(`${environment.apiUrl}/user/getByLoginId/` + login_id);
    }

    getAll() {
        return this.http.get<UserInfo[]>(`${environment.apiUrl}/user/getAll`);
    }
// update user skills
    updateSkills(data, experience, user_id ){   
        return this.http.put(`${environment.apiUrl}/user/updateSkills/` + experience +"/" + user_id, data)
        .subscribe(
            res => {              
                console.log(res);
                alert(res['message']);
                this.router.navigate(['/access/profile']);
            },
            err => {
                console.log('Error occured:' , err);
                console.log(err.message, 'Error occured');
            }
        );
    }

    getById(val: string) {
        return this.http.get(`${environment.apiUrl}/users/getprofile/` + val);
    }

    register(user: UserInfo) {
        return this.http.post(`${environment.apiUrl}/users/signup`, user);
    }

    registerForm(user: any) {
        return this.http.post(`${environment.apiUrl}/users/signup`, user);
    }

    update(user: any) {
        return this.http.patch(`${environment.apiUrl}/users/editprofile/` + user._id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/delete/` + id);
    }

    suspension(id: number) {
        return this.http.post(`${environment.apiUrl}/users/suspension/`, {id: id});
    }

    unSuspension(id: number) {
        return this.http.post(`${environment.apiUrl}/users/unSuspension/`, {id: id});
    }

    switchForm(user_id: string, experience: string, souscategories: any[]){
        // return this.http.post(`${environment.apiUrl}/users/switchUser/`, {user_id: user_id, experience: experience, souscategories: souscategories});
        return this.http.post<any>(`${environment.apiUrl}/users/switchUser`, { user_id: user_id, experience: experience, souscategories: souscategories })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
               if  (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    JSON.stringify(user);
                    // localStorage.setItem('isLoggedin', 'true');
                }

                return user;
            }));
    }

    postFile(fileToUpload: File) {
        const endpoint = 'your-destination-url';
        console.log(fileToUpload) ;
        // const formData: FormData = new FormData();
        // formData.append('fileKey', fileToUpload, fileToUpload.name);
        // return this.http
        //   .post(endpoint, formData, { headers: yourHeadersConfig })
        //   .map(() => { return true; })
        //   .catch((e) => this.handleError(e));
    }
}
