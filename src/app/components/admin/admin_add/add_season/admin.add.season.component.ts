import {Component, OnInit} from '@angular/core';
import {AdminService} from '../../../../services/admin.service';

@Component({
  templateUrl: './admin.add.season.component.html',
  styleUrls: ['../add_match/admin.add.match.component.css']
})

export class AdminAddSeasonComponent{
  season;
  isDirty: boolean;

  constructor(private adminService: AdminService) {
  }

  saveSeason(season){
    console.log(season);
    this.adminService.saveSeason(season).subscribe(()=>{
      alert('Season has been added successfully')
    })
  }
}
