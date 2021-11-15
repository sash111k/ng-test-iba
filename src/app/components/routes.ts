// tslint:disable-next-line:class-name
import {FixturesAndResultsComponent} from './fixtures&results/fixtures-results.component';
import {Routes} from '@angular/router';

export const appRoutes: Routes = [
  {path: 'results', component : FixturesAndResultsComponent },
  {path: '', redirectTo: '/results', pathMatch: 'full'}
];


