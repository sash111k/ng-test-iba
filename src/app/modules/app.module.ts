import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FixturesAndResultsComponent,
    DropdownComponent,
    MyTabsComponent,
    ResultsComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DropdownService,
    MatchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
