import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {HttpHeaders} from '@angular/common/http';

@Injectable()

export class AdminService{
  constructor(private http: HttpService) {
  }

  saveMatch(body){
    const URL = '/api/matches';
    const options = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post(URL,body,options);
  }

  saveSeason(body){
    const URL = '/api/seasons';
    const options = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post(URL,body,options);
  }

  saveTournament(body){
    const URL = '/api/tournaments';
    const options = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post(URL,body,options);
  }
}
