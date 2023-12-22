import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountryService } from '../../shared/country.service';
import { CountryResponse } from '../../shared/models/country';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Continent, Region, Side, StartOfWeek, Status, Idd } from '../../shared/models/country';
import { error } from 'console';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrl: './add-country.component.scss'
})
export class AddCountryComponent {

  newCountry: CountryResponse = {
    name: {
      common: '',
      official: ''
    },
    cca2: '',
    cca3: '',
    status: Status.OfficiallyAssigned,
    unMember: false,
    idd: {
      root: '',
    },
    altSpellings: [],
    region: Region.Africa,
    subregion: '',
    translations: {
      official:'',
      common:''
    },
    latlng: [],
    landlocked: false,
    area: 0,
    flag: '',
    maps: {
      googleMaps:'',
      openStreetMaps: ''
    },
    population: 0,
    car: {
      signs: [],
      side:   Side.Left,
    },
    timezones: [],
    continents: [],
    flags: {
      png:'',
      svg:'',
    },
    coatOfArms: {
      png:'',
      svg:'',
    },
    startOfWeek: StartOfWeek.Monday,
    capitalInfo: {
      latlng: [],
    }
  };

  regions = Object.values(Region);
  statuses = Object.values(Status);
  startOfWeeks = Object.values(StartOfWeek);

  constructor(private countryService: CountryService) {}

  addCountry() {
    this.countryService.addCountry(this.newCountry).subscribe({
      next: (addedCountry: CountryResponse) => {
        // Handle success, e.g., navigate to the country list
      },
      error: (error: any) => {
        // Handle error
      }
  });
  }
}
