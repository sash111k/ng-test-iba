import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {MatchItem} from '../models/match.model';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpParams} from '@angular/common/http';

@Injectable()

export class MatchesService{
  constructor(private http: HttpService, private route: ActivatedRoute) {
  }
   getMatches(sortTeam, sortTournament, sortSeason): Observable<MatchItem[]>{
    const URL = '/api/matches';
    if (sortTeam === undefined) { sortTeam = 0; }
    if (sortTournament === undefined) { sortTournament = 0; }
    if (sortSeason === undefined) { sortSeason = 0; }
    let queryParams = new HttpParams().set('team', sortTeam);
    queryParams = queryParams.append('tournament', sortTournament);
    queryParams = queryParams.append('season', sortSeason);
    return this.http.get(URL, { params : queryParams});
   }
}
