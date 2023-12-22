import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryCardComponent } from './countries/country-card/country-card.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { ChangeCountriesComponent } from './countries/crud1/change-countries/change-countries.component';
import { AddCountryComponent } from './countries/crud1/add-country/add-country.component';
import { UpdateCountryComponent } from './countries/crud1/update-country/update-country.component';
import { DeleteCountryComponent } from './countries/crud1/delete-country/delete-country.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryListComponent,
    CountryCardComponent,
    CountryDetailComponent,
    SearchComponent,
    FilterComponent,
    ChangeCountriesComponent,
    AddCountryComponent,
    UpdateCountryComponent,
    DeleteCountryComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
