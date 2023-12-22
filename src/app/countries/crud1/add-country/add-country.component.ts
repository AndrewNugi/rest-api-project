import { Component } from '@angular/core';
import { CountryService } from '../../shared/country.service';
import { CountryResponse } from '../../shared/models/country';
import { Region, Side, StartOfWeek, Status } from '../../shared/models/country';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

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

  

  constructor(private countryService: CountryService, private router: Router, private readonly http: HttpClient ) {}

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

  onFileChange(event: any, fileType: string) {
    const file = event.target.files[0];

    if (fileType === 'png') {
      this.newCountry.coatOfArms.png = file;
    } else if (fileType === 'svg') {
      this.newCountry.coatOfArms.svg = file;
    }
  }

  onFileChange2(event: any, fileType: string) {
    const file = event.target.files[0];

    if (fileType === 'png') {
      this.newCountry.flags.png = file;
    } else if (fileType === 'svg') {
      this.newCountry.flags.svg = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('flags', this.newCountry.flags.png);
    formData.append('flags', this.newCountry.flags.svg);


    this.http.post(`${environment.baseUrl}`, formData)
    .subscribe({
      next: (response: any) => {
        console.log('Response:', response);
      },
      error: (error: any) => {
        console.error('Error:', error);
      }
    });
}
}
