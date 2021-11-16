export interface MatchItem{
   id: number;
   first_team: string;
   first_team_score: number;
   second_team_score: number;
   second_team: string;
   tournament: string;
   season: number;
   full_tournament_name?: string;
}
