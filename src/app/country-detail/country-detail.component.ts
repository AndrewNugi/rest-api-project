import { Component, OnInit } from '@angular/core';
import { CountryResponse, Currencies } from '../countries/shared/models/country';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../countries/shared/country.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private service: CountryService
  ){

  }

  country: any = Observable<CountryResponse>;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const countryName = params['name'];
      this.service.getCountryDetails(countryName).subscribe(data => this.country = data[0]);
    })
  }

  displayCurrencies(currencies: Currencies[]){
    return currencies.map(currencies => currencies.AED).join(',');
  }

}
