import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatchesService } from '../../../services/matches.service';

@Component({
   selector: 'results',
   templateUrl: './results.component.html',
   styleUrls: ['./results.component.css']
})

export class ResultsComponent implements OnChanges{
   @Input() sorting;
   constructor(private matchesService: MatchesService) { }
   matches;


   sortTeam = 'all';
   sortTournament = 'all';
   sortSeason = 'all';

   ngOnChanges(): void {
      // console.log(this.sorting);
      if (this.sorting) {
         switch (this.sorting.sortBy) {
            case 'team':
               this.sortTeam = this.sorting.name;
               break;
            case 'tournament':
               this.sortTournament = this.sorting.name;
               break;
            case 'season':
               this.sortSeason = this.sorting.name;
               break;
         }
      }
      console.log(this.sortTeam, this.sortTournament, this.sortSeason);
      this.filterMatches();
   }

   filterMatches(): void {
      this.matches = this.matchesService.getMatches().filter((match) => {
         if ((match.firstTeam.toLocaleLowerCase() === this.sortTeam.toLocaleLowerCase() ||
            match.secondTeam.toLocaleLowerCase() === this.sortTeam.toLocaleLowerCase() ||
            this.sortTeam.toLocaleLowerCase() === 'all')) {
            return match;
         }
      });
   }

}
