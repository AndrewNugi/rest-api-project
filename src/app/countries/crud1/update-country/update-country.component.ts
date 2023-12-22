import { Component } from '@angular/core';
import { CountryResponse, Region, Side, StartOfWeek, Status } from '../../shared/models/country';
import { CountryService } from '../../shared/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-country',
  templateUrl: './update-country.component.html',
  styleUrl: './update-country.component.scss'
})
export class UpdateCountryComponent {

  updateFormData: CountryResponse = {
    name: { common: '', official: '' },
    cca2: '',
    cca3: '',
    status: Status.OfficiallyAssigned,
    unMember: false,
    idd: { root: '' },
    altSpellings: [],
    region: Region.Africa,
    subregion: '',
    translations: { official: '', common: '' },
    latlng: [],
    landlocked: false,
    area: 0,
    flag: '',
    maps: { googleMaps: '', openStreetMaps: '' },
    population: 0,
    car: { signs: [], side: Side.Left },
    timezones: [],
    continents: [],
    flags: { png: '', svg: '' },
    coatOfArms: { png: '', svg: '' },
    startOfWeek: StartOfWeek.Monday,
    capitalInfo: { latlng: [] }
  };

  regions = Object.values(Region);
  statuses = Object.values(Status);
  startOfWeeks = Object.values(StartOfWeek);

  constructor(
    private readonly countryService: CountryService,
    private router: Router
  ) {}

  onUpdateCountry() {
    
    this.countryService.updateCountry(this.updateFormData).subscribe({
      next: (updatedCountry: CountryResponse | undefined) => {
        if (updatedCountry) {
          console.log(`Country ${updatedCountry.name.common} updated successfully.`);
          this.router.navigate(['/countries']);
        } else {
          console.error('Updated country is undefined.');
          alert('Updated country is not defined. Try again.')
        }
      error: (error: any) => {
        console.error('Error updating country: ', error);
        alert('Error updating country. Try again.')
      }
    }});
    
  }

}
