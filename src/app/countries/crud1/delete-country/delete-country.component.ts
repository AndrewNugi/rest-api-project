import { Component } from '@angular/core';
import { CountryResponse, Region, Side, StartOfWeek, Status } from '../../shared/models/country';
import { CountryService } from '../../shared/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-country',
  templateUrl: './delete-country.component.html',
  styleUrl: './delete-country.component.scss'
})
export class DeleteCountryComponent {

  constructor(
    private readonly countryService: CountryService,
    private router: Router
  ) {}

  countryName: string = '';

  removeCountry() {
    if (this.countryName.trim() === '') {
      // Handle empty input, e.g., show a message to the user
      console.warn('Please enter a country name.');
      return;
    }

    this.countryService.deleteCountry(this.countryName).subscribe({
      next: () => {
        console.log(`Country ${this.countryName} deleted successfully.`);
        // Optionally, you might want to reload the list of countries from the server
        // this.loadCountries();
      },
      error: (error: any) => {
        console.error(`Error deleting country ${this.countryName}: `, error);
        // Handle error, e.g., show an error message to the user
      }
    });
  }
}
