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
