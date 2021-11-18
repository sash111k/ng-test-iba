import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatchItem} from '../../../../models/match.model';
import {DropdownService} from '../../../../services/dropdown.service';
import {DropdownItem} from '../../../../models/dropdown.model';
import {AdminService} from '../../../../services/admin.service';

@Component({
  templateUrl: './admin.add.match.component.html',
  styleUrls: ['./admin.add.match.component.css']
})

export class AdminAddMatchComponent implements OnInit{
  newMatchForm: FormGroup
  isDirty: boolean = false

  arr1 = [{id:1, name: 'sasha'}, {id:2, name: 'alex'}]
  arr2 = [{id:1, name: 'AAAA'}, {id:2, name: 'BBBB'}]

  first_team_items: DropdownItem[];
  second_team_items: DropdownItem[];
  tournament_items: DropdownItem[];
  season_items: DropdownItem[];

  constructor(private dropdownService: DropdownService, private adminService: AdminService) {
  }

  ngOnInit(): void{
    this.dropdownService.getTeams().subscribe(data =>{
      this.first_team_items = data;
      this.second_team_items = data;
    })
    this.dropdownService.getTournaments().subscribe(data =>{
      this.tournament_items = data;
    })
    this.dropdownService.getSeasons().subscribe(data => {
      this.season_items = data;
    })

    let first_team_name = new FormControl(null,Validators.required);
    let second_team_name = new FormControl(null,Validators.required);
    let first_team_score = new FormControl(null,Validators.required);
    let second_team_score = new FormControl(null,Validators.required);
    let tournament = new FormControl(null,Validators.required);
    let season = new FormControl(null,Validators.required);
    let full_tournament_name = new FormControl(null);
    this.newMatchForm = new FormGroup({
      first_team_name : first_team_name,
      second_team_name : second_team_name,
      first_team_score : first_team_score,
      second_team_score : second_team_score,
      tournament : tournament,
      season : season,
      full_tournament_name : full_tournament_name
    })
  }

  saveMatch(formValues): any{
    if (this.newMatchForm.valid) {
      this.adminService.saveMatch(formValues).subscribe(()=>{
        alert('Match has been added successfully')
      });
    }
    else{
      console.log("INVALID FORM");
      this.isDirty = true;
    }
  }
}
