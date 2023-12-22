import { Component } from '@angular/core';
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
      console.warn('Please enter a country name.');
      return;
    }

    this.countryService.deleteCountry(this.countryName).subscribe({
      next: () => {
        console.log(`Country ${this.countryName} deleted successfully.`);
        this.router.navigate(['/countries']);
      },
      error: (error: any) => {
        console.error(`Error deleting country ${this.countryName}: `, error);
        alert('Error deleting country. Try again.');
      }
    });
  }
}
