import { Component } from '@angular/core';
import { CountryService } from '../../shared/country.service';
import { CountryResponse } from '../../shared/models/country';
import { Region, Side, StartOfWeek, Status } from '../../shared/models/country';
import { Router } from '@angular/router';

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

  constructor(private countryService: CountryService, private router: Router ) {}

  addCountry() {
    this.countryService.addCountry(this.newCountry).subscribe({
      next: (addedCountry: CountryResponse) => {
        console.log('Country added succesfully:', addedCountry);
        this.router.navigate(['/countries'])
      },
      error: (error: any) => {
        console.error('Error adding country:', error);
        alert('Error adding country. Try again');
      }
  });
  }
}
