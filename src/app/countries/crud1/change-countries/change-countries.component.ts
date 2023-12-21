import { Component } from '@angular/core';
import { CountryService } from '../../shared/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-countries',
  templateUrl: './change-countries.component.html',
  styleUrl: './change-countries.component.scss'
})
export class ChangeCountriesComponent {
  
  constructor(
    private readonly countryService: CountryService,
    private router: Router
    ){
  }

  addCountry(){
    this.router.navigate(['add']);
  }
}
