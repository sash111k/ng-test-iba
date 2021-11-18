import { Injectable } from '@angular/core';
import { DropdownItem } from '../models/dropdown.model';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
@Injectable()

export class DropdownService{

  constructor(private http: HttpService) {
  }

   // @ts-ignore
  getTeams(): Observable<DropdownItem[]> {
    return this.http.get('/api/teams');
   }

   getTournaments(): Observable<DropdownItem[]> {
     return this.http.get('/api/tournaments');
   }

   getSeasons(): Observable<DropdownItem[]> {
     return this.http.get('/api/seasons');
   }
}
