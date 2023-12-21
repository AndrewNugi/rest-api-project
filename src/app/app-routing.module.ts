import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryCardComponent } from './countries/country-card/country-card.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { ChangeCountriesComponent } from './countries/crud1/change-countries/change-countries.component';
import { AddCountryComponent } from './countries/crud1/add-country/add-country.component';


const routes: Routes = [
  {path:'', component: CountryListComponent},
  {path:'countries/:region', component: CountryCardComponent},
  {path:'country/:name', component: CountryDetailComponent},
  {path:'countries', component: CountryCardComponent},
  {path:'search', component: SearchComponent},
  {path:'filter', component: FilterComponent},
  {path:'change', component: ChangeCountriesComponent},
  {path:'add', component: AddCountryComponent}
];

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload',
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
