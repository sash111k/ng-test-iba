import {Component, OnInit} from '@angular/core';
import {TableItem,TableHeaderItem,TableModel, PaginationModel} from 'carbon-components-angular';
import {AdminService} from '../../../../services/admin.service';


@Component({
  templateUrl: './admin.view.matches.component.html'
})

export class AdminViewMatchesComponent implements OnInit{
  title = 'Matches';

  matchesTableModel = new TableModel();
  matchesPaginationModel = new PaginationModel();
  constructor(private adminService: AdminService) {
  }
  allMatches  = new TableModel();
  ngOnInit() {

    this.adminService.getMatches().subscribe(matches =>{
      this.allMatches.currentPage = 1;
      this.allMatches.pageLength = 10;
      this.allMatches.data.length = 0;
      for (let match of matches){
        this.allMatches.data.push(
          [
            new TableItem({data: match.id}),
            new TableItem({data: match.first_team}),
            new TableItem({data: match.first_team_score}),
            new TableItem({data: match.second_team_score}),
            new TableItem({data: match.second_team}),
            new TableItem({data: match.season}),
            new TableItem({data: match.tournament}),
            new TableItem({data: match.full_tournament_name || 'null'}),
          ]
        )
      }
      this.matchesTableModel.data = this.allMatches.data.
      slice(
        this.allMatches.pageLength*(this.allMatches.currentPage - 1),
        (this.allMatches.currentPage * this.allMatches.pageLength))
    })

    this.matchesTableModel.header = [
      new TableHeaderItem({data: "id"}),
      new TableHeaderItem({data: "First Team"}),
      new TableHeaderItem({data: "First Team Score"}),
      new TableHeaderItem({data: "Second Team Score"}),
      new TableHeaderItem({data: "Second Team"}),
      new TableHeaderItem({data: "Season"}),
      new TableHeaderItem({data: "Tournament"}),
      new TableHeaderItem({data: "Full Tournament Name"}),
    ];

  }

  selectPage(event) {
    console.log(event);
    this.allMatches.currentPage = event;

    console.log(this.allMatches);
    this.matchesTableModel.data = this.allMatches.data.
    slice(
      this.allMatches.pageLength*(this.allMatches.currentPage - 1),
      (this.allMatches.currentPage * this.allMatches.pageLength))
  }
}
