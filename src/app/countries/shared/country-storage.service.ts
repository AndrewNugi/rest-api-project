// country-storage.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryResponse } from './models/country';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryStorageService {
  private countries: CountryResponse[] = [];

  constructor(private readonly http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  addCountry(country: CountryResponse): Observable<CountryResponse> {
    this.countries.push(country);
    this.http.post<CountryResponse>(environment.baseUrl, country);
    return of(country);
  }

  updateCountry(updatedCountry: CountryResponse): Observable<CountryResponse | undefined> {
    const index = this.countries.findIndex(country => country.name === updatedCountry.name);

    if (index !== -1) {
      this.countries[index] = updatedCountry;
      return of(updatedCountry);
    }

    return of(undefined);
  }

  deleteCountry(name: string): Observable<void> {
    this.countries = this.countries.filter(country => country.name !== country.name);
    return of();
  }
}

