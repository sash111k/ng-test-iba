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
    let queryParams = new HttpParams().set('team', sortTeam);
    queryParams = queryParams.append('tournament', sortTournament);
    queryParams = queryParams.append('season', sortSeason);
    return this.http.get(URL, { params : queryParams});
   }
}
