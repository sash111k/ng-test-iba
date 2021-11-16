import {Component, OnInit} from '@angular/core';
import { DropdownItem } from '../../models/dropdown.model';
import { DropdownService } from '../../services/dropdown.service';
import {MatchItem} from '../../models/match.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchesService} from '../../services/matches.service';

@Component({
   templateUrl: './fixtures-results.component.html',
   styleUrls: ['./fixtures-results.component.css']
})

export class FixturesAndResultsComponent implements OnInit{

   constructor(private dropdownService: DropdownService, private matchesService: MatchesService,
               private router: Router, private activatedRoute: ActivatedRoute){}
   tournaments: DropdownItem[];
   teams: DropdownItem[];
   seasons: DropdownItem[];
   matches: MatchItem[];
   sorting: any;

   filterTeam = 0;
   filterTournament = 0;
   filterSeason = 0;

   ngOnInit(): void{
     this.activatedRoute.queryParams.subscribe(params => {
       this.filterTeam = params.team;
       this.filterTournament = params.tournament;
       this.filterSeason = params.season;
     });
     this.dropdownService.getTeams().subscribe((data: DropdownItem[]) => {
       this.teams = data;
     });
     this.dropdownService.getTournaments().subscribe((data: DropdownItem[]) => {
       this.tournaments = data;
     });
     this.dropdownService.getSeasons().subscribe((data: DropdownItem[]) => {
       this.seasons = data;
     });
     this.matchesService.getMatches(this.filterTeam, this.filterTournament, this.filterSeason)
       .subscribe((response: MatchItem[]) => {
         this.matches = response;
         console.log(this.matches.length);
       });
   }
   getProperty(data: any): void {
     if (data) {
        this.sorting = data;
      }
     if (this.sorting) {
       switch (this.sorting.sortBy) {
         case 'team':
           this.filterTeam = this.sorting.id;
           break;
         case 'tournament':
           this.filterTournament = this.sorting.id;
           break;
         case 'season':
           this.filterSeason = this.sorting.id;
           break;
       }
     }
     console.log(this.filterTeam, this.filterTournament, this.filterSeason, 'FROM MAIN PAGE');
     this.router.navigate(
       [],
       {
         relativeTo: this.activatedRoute,
         queryParams: {team: this.filterTeam, tournament: this.filterTournament, season: this.filterSeason}
       }
     );
     this.matchesService.getMatches(this.filterTeam, this.filterTournament, this.filterSeason)
       .subscribe((response: MatchItem[]) => {
        this.matches = response;
        console.log(this.matches.length);
      });
   }
}
