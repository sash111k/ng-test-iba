import { Component } from '@angular/core';
import { DropdownItem } from '../../models/dropdown.model';
import { DropdownService } from '../../services/dropdown.service';

@Component({
   templateUrl: './fixtures-results.component.html',
   styleUrls: ['./fixtures-results.component.css']
})

export class FixturesAndResultsComponent{

   constructor(private dropdownService: DropdownService){}
   tournaments: DropdownItem[] = this.dropdownService.getTournaments();
   teams: DropdownItem[] = this.dropdownService.getTeams();
   seasons: DropdownItem[] = this.dropdownService.getSeasons();

   sorting: any;
   getProperty(data: any): void {
      if (data) {
         this.sorting = data;
      }
   }
}
