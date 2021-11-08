import { Injectable } from '@angular/core';

@Injectable()

export class MatchesService{
   getMatches(): any{
      return MATCHES;
   }
}

const MATCHES = [
   {
      id: 1,
      firstTeam: 'Team Spirit',
      firstTeamScore: 3,
      secondTeam: 'PSG.LGD',
      secondTeamScore: 2
   },
   {
      id: 2,
      firstTeam: 'Team Secret',
      firstTeamScore: 0,
      secondTeam: 'PSG.LGD',
      secondTeamScore: 2
   },
   {
      id: 3,
      firstTeam: 'Team Spirit',
      firstTeamScore: 2,
      secondTeam: 'IG',
      secondTeamScore: 1
   },
   {
      id: 4,
      firstTeam: 'Team Spirit',
      firstTeamScore: 2,
      secondTeam: 'Virtus Pro',
      secondTeamScore: 1
   },
   {
      id: 5,
      firstTeam: 'Team Spirit',
      firstTeamScore: 3,
      secondTeam: 'PSG.LGD',
      secondTeamScore: 2
   },
   {
      id: 6,
      firstTeam: 'Team Spirit',
      firstTeamScore: 3,
      secondTeam: 'PSG.LGD',
      secondTeamScore: 2
   }
];