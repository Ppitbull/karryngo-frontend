import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { ParametersService } from '../../../shared/parameters/parameters.service';
import { GeneraleService } from '../../../shared/service/generale/generale.service';

export interface City {
  name: string;
}

export interface Country {
  uuid: string;
  name: string;
  cities: City[];
}

@Component({
  selector: 'app-user-registration3',
  templateUrl: './user-registration3.component.html',
  styleUrls: ['./user-registration3.component.scss']
})
export class UserRegistration3Component implements OnInit {

  panelOpenState = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // represente l liste des pays choisi avec leur villes
  countries: Country[] = [
    {
      uuid: '',
      name: 'New country',
      cities: [{ name: 'new City' }]
    }
  ];

  // represente la liste de tout les pays avec leur ville
  allCountriesAndthierCities: Country[] = [];

  allCountriesData: any;


  constructor(
    private generalService: GeneraleService
  ) { }
  ngOnInit() {
    this.initAllCountries();
  }

  // remove country
  removeCountry(country: Country): void {
    const index = this.countries.indexOf(country);

    if (index >= 0) {
      this.countries.splice(index, 1);
    }
  }

  removeCity(country: Country, city: City): void {
    const cities = country.cities;
    const index = cities.indexOf(city);
    if (index >= 0) {
      cities.splice(index, 1);
    }
  }

  // recupere de maniere brute la liste des pays
  initAllCountries() {
    this.generalService.getAllCountriesEn().then(cou => {
      this.allCountriesData = cou.data;
    }).catch(error => {
      this.allCountriesData = [];
    });
  }

  // initialise la liste des pays avec leur villes
  initAllCountriesAndThierCities() {
    /* let data: Country;
    let countryName;
    let uuidCountry;
    let citiesOfCountry: City[] = [];
    this.allCountriesData.forEach(element => {
      countryName = element.attributes.name;
      uuidCountry = element.attributes.uuid;
      // recuperation des ville du pays
      this.generalService.citiesOfCountry(countryName).forEach(cityName => {
        citiesOfCountry.push({ name: cityName });
      });
      // ajout des pays
      data = {
        uuid: uuidCountry,
        name: countryName,
        cities: citiesOfCountry
      };
      this.allCountriesAndthierCities.push(data);
      citiesOfCountry = [];
    });
    console.log(this.allCountriesAndthierCities); */
  }

  // add city in country
  addCityOfCountry(country: Country) {
    country.cities.push({ name: 'new city' });
  }

  // add country
  addCountry() {
    const country: Country = {
      uuid: '',
      name: 'New country',
      cities: []
    };
    this.countries.push(country);
  }

}
