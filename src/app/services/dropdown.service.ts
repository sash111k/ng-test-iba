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

const TEAMS: DropdownItem[] = [
   {id: 1, name: 'Team Spirit'},
   {id: 2, name: 'Team Secret'},
   {id: 3, name: 'Team Liquid'},
   {id: 4, name: 'PSG.LGD'},
   {id: 5, name: 'Virtus Pro'},
   {id: 6, name: 'Team Nigma'},
];


const TOURNAMENTS: DropdownItem[] = [
   { id: 1, name: 'The International' },
   { id: 2, name: 'SuperMajor' },
   { id: 3, name: 'DotaPit' },
   { id: 4, name: 'Major' },
   { id: 5, name: 'DPC League' }
];


const SEASONS: DropdownItem[] = [
   { id: 1, name: '2020' },
   { id: 2, name: '2019' },
   { id: 3, name: '2018' },
   { id: 4, name: '2017' },
   { id: 5, name: '2016' },
];
