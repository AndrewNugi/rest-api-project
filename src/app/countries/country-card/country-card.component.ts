import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CountryResponse, Region } from '../shared/models/country';
import { Observable, Subscribable, map } from 'rxjs';
import { CountryService } from '../shared/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryCardComponent implements OnInit{

  countries = new Observable<CountryResponse[]>();

  constructor(private readonly countryService: CountryService, private router: Router, private route: ActivatedRoute, private readonly http:HttpClient){

  }

  ngOnInit(): void {
    this.countries = this.countryService.getAllCountries();
  }

  onCountryClicked(name : string){
    this.router.navigate(['/country', name]);
  }

/*  onRegionSelected(region:string) {
    this.router.navigate(['/region', region]);
  }

  filterCountriesByRegion(region: string): Observable<CountryResponse[]> {
    return this.countries.pipe(
      map((countriesArray: CountryResponse[]) => {
        // Use the filter method to filter countries based on the region
        return countriesArray.filter(country => country.region === region);
      })
    );
  }
*/

}
