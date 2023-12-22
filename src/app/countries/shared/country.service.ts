import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CountryResponse } from './models/country';
import { CountryStorageService } from './country-storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private readonly http: HttpClient, private readonly countryStorageService: CountryStorageService, private router: Router, private route: ActivatedRoute) { }

  getAllCountries(): Observable<CountryResponse[]> {
    let url = `${environment.baseUrl}/all`;

    /*if (region) {
      url = `${environment.baseUrl}/region/${region}`;
      
    }*/

    return this.http.get<CountryResponse[]>(url);
  }

  getCountryDetails(name: string): Observable<CountryResponse[]> {
    const url = `${environment.baseUrl}/name/${name}`;
    return this.http.get<CountryResponse[]>(url);
  }

  getCountryDetailsByRegion(region: string): Observable<CountryResponse[]> {
    const url2 = `${environment.baseUrl}/region/${region}`;
    return this.http.get<CountryResponse[]>(url2);
  }
  addCountry(country: CountryResponse): Observable<CountryResponse> {
    return this.http.post<CountryResponse>(`${environment.baseUrl}/add`, country);
  }

  updateCountry(country: CountryResponse): Observable<CountryResponse | undefined> {
    return this.countryStorageService.updateCountry(country);
  }

  deleteCountry(name: string): Observable<void> {
    return this.countryStorageService.deleteCountry(name);
  }

  
}
