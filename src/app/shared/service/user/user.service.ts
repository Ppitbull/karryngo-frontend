import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { GeneraleService } from '../generale/generale.service';
import { ParametersService } from '../../../shared/parameters/parameters.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../shared/entity/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  public static currentUser: User = new User();
  public static isUser = true;
  params: any;
  userData: any;
  isLoggedIn = false;

  constructor(
    private api: ApiService,
    private generalService: GeneraleService,
    private parameters: ParametersService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  /*
*  Set the user informations.
*/
  setUserInformations(user: any) {
    localStorage.setItem('user-data', JSON.stringify(user));
    this.isLoggedIn = true;
  }


  /*
 *  get the user informations.
 */
  getUserInformations() {
    return JSON.parse(localStorage.getItem('user-data'));
  }


  /*
  *  Get local user profile data.
  */
  getLocalStorageUser() {
    this.userData = JSON.parse(localStorage.getItem('user-data'));
    if (this.userData) {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  /*
  * resetPassword is used to reset your password.
  */
  resetPassword() {
    this.toastr.success('Email Sent');
    this.router.navigate(['/login']);
  }

  /*
  * logOut function is used to sign out .
  */
  logOut() {
    localStorage.removeItem('user-data');
    this.isLoggedIn = false;
    this.toastr.success('You have been successfully logged out!');
    this.router.navigate(['/login']);
  }

  // permet denvoyer le code au user par mail pour reset son password
  sendCodeUserByEmail(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const params = {
        'email': data
      };
      this.api.post('api/v01/recover-user/by-email?_format=hal_json', JSON.stringify(params)).subscribe(success => {
        resolve(success);
      }, error => {
        reject(error);
      });
    });
  }

  // permet de valider le code renseigné par le user
  validateCodeEmailUser(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const params = {
        'field_email': data.field_email,
        'user_code': data.user_code
      };
      this.api.post(`api/v01/recover-user/by-email/validate-code`, JSON.stringify(params)).subscribe(success => {
        resolve(success);
      }, error => {
        reject(error);
      });
    });
  }

  // permet de changer le password du user dès lors quil a renseigné le bon code
  changeUserPassword(data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const params = {
        'field_email': data.field_email,
        'user_code': data.user_code,
        'field_password': data.field_password
      };
      this.api.post(`api/v01/recover-user/by-email/change-password`, JSON.stringify(params)).subscribe(success => {
        resolve(success);
      }, error => {
        reject(error);
      });
    });
  }


  // Permet de get le user connected en renvoyant toutes les infos nécessaires sur le profil du user
  userConnectedInformations(): Promise<any> {

    return new Promise((resolve, reject) => {
      console.log('de nimporte quoi');
      const headers = {
        'Authorization': 'Bearer ' + this.api.getAccessToken(),
        'Content-Type': 'application/json',
        // 'Accept': 'application/json'
      };

      this.api.get('requester/profil', headers)
      .subscribe((response: any) => {
        if (response) {
          resolve(response);
          this.setUserInformations(response);
        }

      }, (error: any) => {

        if (error) {
          console.log(error);
          this.toastr.success(error.message);
          reject(error);
        }
      });
    });
  }

  // permet d'update les infos d'un user
  UpdateUser(nid: string, token: string, data: any): Promise<any> {

    return new Promise((resolve, reject) => {

      const headers = {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/hal+json',
        'Accept': 'application/json',
        'X-CSRF-Token': 'FWjJkOClVTMzyhEPEhz_OPR3PulweXUqi-NePcofKU8' || JSON.parse(localStorage.getItem('app-token'))
      }

      const cheminUrl = `${this.api.url}/rest/type/user/user`;
      this.params = {
        '_links': {
          'type': {
            'href': cheminUrl
          }
        },
        // body
        'field_firstname': [
          {
            'value': data.field_firstname
          }
        ],

        'field_surname': [
          {
            'value': data.field_surname
          }
        ],

        'field_username': [
          {
            'value': data.field_username
          }
        ],

        'field_addresse_gps': [
          {
            'lat': 52.47878999999999649617166141979396343231201171875,
            'lng': -0.11067700000000000072619688040731489309109747409820556640625
          }
        ],

        'field_address': [
          {
            'value': data.field_address
          }
        ],

        'field_mobile_phone_number': [
          {
            'value': data.field_mobile_phone_number
          }
        ],

        'field_phone_number': [
          {
            'value': data.field_phone_number
          }
        ],

        'field_whatsapp_number': [
          {
            'value': data.field_whatsapp_number
          }
        ],
        // Les 2 cas qui suivent sont utilisés pour enregistrer le pays du user en fonction de la langue choisie dans le système. N.B: 1 seul cas parmi les 2 est utilisé.

        // Cas 1: ceci est utilisé pour enregistrer le pays du user avec choix de la langue English (uuid est obtenu à partir du numéro 12)
        'http://dev.sdkgames.com/karryngo/rest/relation/user/user/field_country': [
          {
            '_links': {
              'type': {
                'href': 'http://dev.sdkgames.com/karryngo/rest/type/taxonomy_term/countries'
              }
            },
            'uuid': [
              {
                'value': data.country_uuid
              }
            ]
          }
        ],

        '_embedded': {
          // Ceci est utilisé s'il y a le ID du type (ID Card ou Passport ou ...) (représente le ID type (ID Card ou Passport) obtenu à partir du numéro 6)
          'http://dev.sdkgames.com/karryngo/rest/relation/user/user/field_id_type': [
            {
              '_links': {
                'type': {
                  'href': 'http://dev.sdkgames.com/karryngo/rest/type/taxonomy_term/id_type'
                }
              },
              'uuid': [
                {
                  'value': data.field_id_type
                }
              ]
            }
          ],

          // Ceci est utilisé pour lier l'image au profil du user. On utilise le numéro 7 pour save une image puis récupérer son uuid qu'on renseigne en bas
          'http://dev.sdkgames.com/karryngo/rest/relation/user/user/user_picture': [
            {
              '_links': {
                'type': {
                  'href': 'http://dev.sdkgames.com/karryngo/rest/type/file/file'
                }
              },
              'uuid': [
                {
                  'value': data.user_picture
                }
              ]

            }
          ],

          // Cas 1: ceci est utilisé pour enregistrer le pays du user avec choix de la langue English (uuid est obtenu à partir du numéro 12)
          'http://dev.sdkgames.com/karryngo/rest/relation/user/user/field_country': [
            {
              '_links': {
                'type': {
                  'href': 'http://dev.sdkgames.com/karryngo/rest/type/taxonomy_term/countries'
                }
              },
              'uuid': [
                {
                  'value': data.field_country
                }
              ]

            }
          ],
          // Cas 2: ceci est utilisé pour enregistrer le pays du user avec choix de la langue Français (uuid est obtenu à partir du numéro 13)
          /* 'http://dev.sdkgames.com/karryngo/rest/relation/user/user/field_pays': [
            {
              '_links': {
                'type': {
                  'href': 'http://dev.sdkgames.com/karryngo/rest/type/taxonomy_term/pays'
                }
              },
              'uuid': [
                {
                  'value': data.field_pays
                }
              ]

            }
          ], */

          // Ceci est utilisé pour enregistrer les différentes langues choisies par le user (uuid est obtenu à partir du numéro 11).
          'http://dev.sdkgames.com/karryngo/rest/relation/user/user/field_language': data.field_language || [],

          // ceci est ajouté pour mettre à jour les différents types de service que le user offre (Services offered)
          'http://dev.sdkgames.com/karryngo/rest/relation/user/user/field_choose_type_of_services': data.field_choose_type_of_services || [],

          // ceci est utilisé pour mettre à jour le choix du pays avec ces villes
          'http://dev.sdkgames.com/karryngo/rest/relation/user/user/field_interested_countries': data.field_interested_countries || [],

          // ceci est utilisé pour mettre à jour les documents personnels du user
          'http://dev.sdkgames.com/karryngo/rest/relation/user/user/field_documents': data.field_documents || [],
        }
      };
      this.api.patch(`user/${nid}?_format=hal_json`, JSON.stringify(this.params), headers).subscribe(success => {
        resolve(success);
      }, error => {
        reject(error);
      });
    });
  }

  // permet d enregistrer les pays y compris les choix des villes fait par le user
  saveCountriesAndCities(token: string, data: any): Promise<any> {

    return new Promise((resolve, reject) => {

      const headers = {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/hal+json',
        'Accept': 'application/json',
        'X-CSRF-Token': 'L37xETNIYg_slJIQMKlJIti9b5uwdOmKaP_lOnnq4hE' || JSON.parse(localStorage.getItem('app-token'))
      }
      const cheminUrl = `${this.api.url}/rest/type/node/countries`;
      this.params = {
        '_links': {
          'type': {
            'href': cheminUrl
          }
        },
        // représente le nom du pays
        'title': [
          {
            'value': data.title
          }
        ],
        // représente le tableau de JSON des villes saisies
        'field_city': data.field_city || [],
        'type': [
          {
            'target_id': 'countries'
          }
        ]
      };
      this.api.post(`entity/node?_format=hal_json`, JSON.stringify(this.params), headers).subscribe(success => {
        resolve(success);
      }, error => {
        reject(error);
      });
    });
  }

  // Permet de get les infos des pays choisis y compris ces villes pour un user
  getCountriesCitiesUser(token: string, id_node: string): Promise<any> {
    const headers = {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/hal+json',
      'Accept': 'application/json',
      'X-CSRF-Token': 'L37xETNIYg_slJIQMKlJIti9b5uwdOmKaP_lOnnq4hE' || JSON.parse(localStorage.getItem('app-token'))
    }
    return new Promise((resolve, reject) => {
      this.api.get(`node/${id_node}?_format=hal_json`, headers).subscribe(success => {
        resolve(success);
      }, error => {
        reject(error);
      });
    });
  }

  // Permet d enregistrer un document personnel du user (ID CARD, PROOF OF RESIDENCE, ...)
  saveUserDocument(token: string, data: any): Promise<any> {

    return new Promise((resolve, reject) => {

      const headers = {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/hal+json'
      }
      const cheminUrl = `${this.api.url}/rest/type/file/image`;
      this.params = {
        '_links': {
          'type': {
            'href': cheminUrl
          }
        },
        // ici on mets le nom du fichier suivi de .pdf
        'filename': [{ 'value': data.filename }],
        // ou "application/pdf"
        'filemime': [{ 'value': 'application/octet-stream' }],
        // on mets la valeur du fichier converti en base64
        'data': [{ 'value': data.data }]
      };
      this.api.post(`entity/file?_format=hal_json`, JSON.stringify(this.params), headers).subscribe(success => {
        resolve(success);
      }, error => {
        reject(error);
      });
    });
  }

  // touts les types ID(card id, passporId)
  getAllIdType(): Promise<any> {
    return this.generalService.getAllElement(this.parameters.allTypeId);
  }

}
