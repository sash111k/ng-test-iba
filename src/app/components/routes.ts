// tslint:disable-next-line:class-name
import {FixturesAndResultsComponent} from './fixtures&results/fixtures-results.component';
import {Routes} from '@angular/router';
import {AdminAddMatchComponent} from './admin/admin_add/add_match/admin.add.match.component';
import {AdminAddSeasonComponent} from './admin/admin_add/add_season/admin.add.season.component';
import {AdminAddTournamentComponent} from './admin/admin_add/add_tournament/admin.add.tournament';
import {AdminViewMatchesComponent} from './admin/admin_view/admin_view_matches/admin.view.matches.component';

export const appRoutes: Routes = [
  {path: 'results', component : FixturesAndResultsComponent },
  {path: '', redirectTo: '/results', pathMatch: 'full'},
  {path: 'admin/matches/add', component: AdminAddMatchComponent},
  {path: 'admin/seasons/add', component: AdminAddSeasonComponent},
  {path: 'admin/tournaments/add', component: AdminAddTournamentComponent},
  {path: 'admin/matches/view', component: AdminViewMatchesComponent}

];


