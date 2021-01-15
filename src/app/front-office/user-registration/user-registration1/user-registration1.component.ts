import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneraleService } from '../../../shared/service/generale/generale.service';
import { ApiService } from '../../../shared/service/api/api.service';
import { ToastrService } from 'ngx-toastr';
import { forEach } from '@angular/router/src/utils/collection';
import { UserService } from '../../../shared/service/user/user.service';
import { ParametersService } from '../../../shared/parameters/parameters.service';

@Component({
  selector: 'app-user-registration1',
  templateUrl: './user-registration1.component.html',
  styleUrls: ['./user-registration1.component.scss']
})
export class UserRegistration1Component implements OnInit, OnDestroy {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  languageCtrl = new FormControl();
  filteredLanguage: Observable<string[]>;
  languages: string[] = [];
  allLanguage: string[] = [];
  dataLanguagesAll: any;

  countries: any;
  loading: boolean;
  formUser1: FormGroup;
  isUser: boolean;

  @ViewChild('languageInput') languageInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    private generalService: GeneraleService,
    private api: ApiService,
    private fb: FormBuilder,
    private toast: ToastrService
  ) {
    this.filteredLanguage = this.languageCtrl.valueChanges.pipe(
      startWith(null),
      map((language: string | null) => language ? this._filter(language) : this.allLanguage.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.languages.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.languageCtrl.setValue(null);
    }
  }

  remove(language: string): void {
    const index = this.languages.indexOf(language);

    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.languages.push(event.option.viewValue);
    this.languageInput.nativeElement.value = '';
    this.languageCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allLanguage.filter(language => language.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    this.isUser = UserService.isUser;
    this.iniFormUser1();
    this.initCountry();
    this.initAllLanguages();
  }


  // initialisation du formulaire
  iniFormUser1() {
    this.formUser1 = this.fb.group({
      name: ['', Validators.required],
      field_surname: ['', Validators.required],
      mail: ['', Validators.required],
      pass: ['', Validators.required],
      country_uuid: ['null', Validators.required]
    });
  }

  // recupere la liste des pays du systeme
  initCountry() {
    this.generalService.getAllCountriesEn().then(country => {
      this.countries = country.data;
    }).catch(error => {
      this.countries = [];
    });
  }

  // recupere toutes les langues du systeme
  initAllLanguages() {
    this.generalService.getAllLanguage().then(languages => {
      this.dataLanguagesAll = languages.data;
      this.dataLanguagesAll.forEach(language => {
        this.allLanguage.push(language.attributes.name);
      });
    }).catch(error => {
      this.allLanguage = [];
    });
  }

  setLanguage(uuid: string) {
    const data = {
      _links: {
        type: {
          href: 'http://dev.sdkgames.com/karryngo/rest/type/taxonomy_term/countries'
        }
      },
      uuid: [
        {
          value: uuid
        }
      ]
    };
    return data;
  }


  // returne l'ensemble des information sur les langues choisies par le user
  getAllUserChoiseLanguage() {
    const data: any[] = [];
    this.languages.forEach(language => {
      this.dataLanguagesAll.forEach(element => {
        if (language === element.attributes.name) {
          data.push(this.setLanguage(element.attributes.uuid));
        }
      });
    });
    return data;
  }

  ngOnDestroy(): void {
    UserService.userEncour.name = this.formUser1.controls.name.value;
    UserService.userEncour.field_surname = this.formUser1.controls.field_surname.value;
    UserService.userEncour.mail = this.formUser1.controls.mail.value;
    UserService.userEncour.pass = this.formUser1.controls.pass.value;
    UserService.userEncour.country_uuid = this.formUser1.controls.country_uuid.value;
    UserService.userEncour.field_language = this.getAllUserChoiseLanguage();
    console.log(UserService.userEncour);
  }

}
