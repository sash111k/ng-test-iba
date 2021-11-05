import { Component, EventEmitter, Output } from "@angular/core";
import { DropdownItem } from "../shared/dropdown.model";
import { DropdownService } from "../shared/dropdown.service";

@Component({
   selector: 'fixtures-reults',
   templateUrl: './fixtures-results.component.html',
   styleUrls: ['./fixtures-results.component.css']
})

export class FixturesAndResultsComponent{
   
   constructor(private dropdownService: DropdownService){}
   tournaments: DropdownItem[] = this.dropdownService.getTournaments();
   teams: DropdownItem[] = this.dropdownService.getTeams();
   seasons: DropdownItem[] = this.dropdownService.getSeasons();

   sorting: Object 
   getProperty(data) {
      if (data) {
         this.sorting = data
      }
   }
}