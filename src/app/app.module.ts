import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { FixturesAndResultsComponent } from './Fixtures&Results/fixtures-results.component';
import { MatchesService } from './Fixtures&Results/matches.service';
import { MyTabsComponent } from './Fixtures&Results/MyTabs/mytabs.component';
import { MatchComponent } from './Fixtures&Results/Results/Match/match.component';
import { ResultsComponent } from './Fixtures&Results/Results/results.component';
import { NavBarComponent } from './navigation/navbar.component';
import { DropdownComponent } from './shared/dropdown.component';
import { DropdownService } from './shared/dropdown.service';

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
  ],
  providers: [
    DropdownService,
    MatchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
