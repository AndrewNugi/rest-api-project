import { Component } from '@angular/core';
import { CountryService } from '../countries/shared/country.service';
import { Observable } from 'rxjs';
import { CountryResponse } from '../countries/shared/models/country';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  countries = this.countryService.getAllCountries();
  region: string | undefined;

  filteredCountries$ = this.countries;

  constructor(private readonly countryService: CountryService, private router: Router, private route: ActivatedRoute) {}

  onCountryClicked(name : string){
    this.router.navigate(['/country', name]);
  }

  onFilter() {
    this.filteredCountries$ = this.filterCountriesByRegion({ region: this.region });
  }

  filterCountriesByRegion({ region }: { region: string | undefined; }): Observable<CountryResponse[]> {
    if (region) {
      return this.countryService.getCountryDetailsByRegion(region);
    } else {
      // If no region is selected, return all countries
      return this.countryService.getAllCountries();
    }
  }
}

/*import { Component } from '@angular/core';
import { CountryService } from '../countries/shared/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CountryResponse } from '../countries/shared/models/country';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  countries = new Observable<CountryResponse[]>();
region: any;

  constructor(private readonly countryService: CountryService, private router: Router, private route: ActivatedRoute, private readonly http:HttpClient){
    this.countries = this.countryService.getAllCountries();

  }
  onFilter(region : string){
    this.countries = this.filterCountriesByRegion(region);
  }

  filterCountriesByRegion(region: string): Observable<CountryResponse[]> {
    return this.countries.pipe(
      map((countriesArray: CountryResponse[]) => {
        // Use the filter method to filter countries based on the region
        return countriesArray.filter(country => country.region === region);
      })
    );
  }
}
/*
// country-filter.component.ts
import { Component } from '@angular/core';

export interface Country {
  name: string;
  region: string;
}

@Component({
  selector: 'app-country-filter',
  template: `
    <div>
      <h2>Filtered Countries</h2>
      <ul>
        <li *ngFor="let country of filteredCountries">{{ country.name }} - {{ country.region }}</li>
      </ul>
    </div>
  `,
})
export class CountryFilterComponent {
  countries: Country[] = [
    { name: 'Country1', region: 'Region1' },
    { name: 'Country2', region: 'Region2' },
    // Add more countries as needed
  ];

  filteredCountries: Country[] = [];

  constructor() {
    // Filter countries based on the region (e.g., 'Region1')
    this.filteredCountries = this.countries.filter(country => country.region === 'Region1');
  }
}

*/