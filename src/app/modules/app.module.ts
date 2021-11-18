import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from '../components/app.component';
import { FixturesAndResultsComponent } from '../components/fixtures&results/fixtures-results.component';
import { MatchesService } from '../services/matches.service';
import { MyTabsComponent } from '../components/fixtures&results/mytabs/mytabs.component';
import { MatchComponent } from '../components/fixtures&results/results/match/match.component';
import { ResultsComponent } from '../components/fixtures&results/results/results.component';
import { NavBarComponent } from '../components/navigation/navbar.component';
import { DropdownComponent } from '../components/shared/dropdown.component';
import { DropdownService } from '../services/dropdown.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../components/routes';
import {HttpService} from '../services/http.service';
import {AdminAddMatchComponent} from '../components/admin/admin_add/add_match/admin.add.match.component';
import {AdminService} from '../services/admin.service';
import {AdminAddSeasonComponent} from '../components/admin/admin_add/add_season/admin.add.season.component';
import {AdminAddTournamentComponent} from '../components/admin/admin_add/add_tournament/admin.add.tournament';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FixturesAndResultsComponent,
    DropdownComponent,
    MyTabsComponent,
    ResultsComponent,
    MatchComponent,
    AdminAddMatchComponent,
    AdminAddSeasonComponent,
    AdminAddTournamentComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    DropdownService,
    MatchesService,
    HttpService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
