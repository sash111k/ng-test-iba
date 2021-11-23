import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../../../services/admin.service';

@Component({
  templateUrl: './admin.add.tournament.html',
  styleUrls: ['../add_match/admin.add.match.component.css']
})

export class AdminAddTournamentComponent{
  tournament;
  isDirty: boolean;

  constructor(private adminService: AdminService) {
  }

  saveTournament(tournament){
    console.log(tournament);
    this.adminService.saveTournament(tournament).subscribe(()=>{
      alert('Success')

    })
  }
}
