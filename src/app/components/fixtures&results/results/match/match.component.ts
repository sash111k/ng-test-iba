import { Component, Input } from "@angular/core";
import { MatchItem } from "../../../../models/match.model";
@Component({
   selector: 'match',
   templateUrl: './match.component.html',
   styleUrls: ['./match.component.css']
})

export class MatchComponent{
   @Input() match: MatchItem = {
      id: 1,
      firstTeam: 'Team Spirit',
      firstTeamScore: 3,
      secondTeam: 'PSG.LGD',
      secondTeamScore: 2
   }
}
