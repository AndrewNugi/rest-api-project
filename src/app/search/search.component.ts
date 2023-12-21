import { Component } from '@angular/core';
import { CountryService } from '../countries/shared/country.service';
import { Observable } from 'rxjs';
import { CountryResponse } from '../countries/shared/models/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  constructor(private searchService: CountryService, private router: Router){}

  countryName:string = "";
  searchResults = new Observable<CountryResponse[]>();

  onSearch(){
    this.searchResults = this.searchService.getCountryDetails(this.countryName);
  }

  onCountryClicked(name : string){
    this.router.navigate(['/country', name]);
  }
}
