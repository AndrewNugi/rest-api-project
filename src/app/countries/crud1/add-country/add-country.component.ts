import { Component } from '@angular/core';
import { CountryResponse } from '../../shared/models/country';
import { Observable } from 'rxjs';
import { CountryStorageService } from '../../shared/country-storage.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrl: './add-country.component.scss'
})
export class AddCountryComponent {

  country: any = Observable<CountryResponse>;
  submitted = false;

  constructor(private readonly http: HttpClient, private readonly countryStorageService: CountryStorageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit():void {

  }

  saveCountry(): void{
    const newCountry = {
    };

    this.countryStorageService.addCountry(newCountry).subscribe({
      next:(res) => {
        console.log(res);
        this.submitted = true;
      }
    })

  }
  this.CountryService.addCountry() {
  
  }



}
