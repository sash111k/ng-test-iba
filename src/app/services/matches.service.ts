import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable()

export class MatchesService{
  constructor(private http : HttpService) {
  }
   getMatches(): any{
    this.http.get('/api/matches').subscribe((response) => {
      console.log(response);
    });
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
