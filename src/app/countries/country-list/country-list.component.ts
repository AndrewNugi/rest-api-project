import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService } from '../shared/country.service';
import { CountryResponse } from '../shared/models/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent implements OnInit{


  countries$ = new Observable<CountryResponse[]>();

  constructor(
    private readonly countryService: CountryService,
    private router: Router
    ){

  }

  ngOnInit(): void {
    
  }

  searchCountry() {
    this.router.navigate(['/search']);
  }
  
  
  viewCountries() {
    this.router.navigate(['countries']);
    
  }

  filterCountry(){
    this.router.navigate(['filter'])
  }

  changeCountry(){
    this.router.navigate(['change'])
  }

}
