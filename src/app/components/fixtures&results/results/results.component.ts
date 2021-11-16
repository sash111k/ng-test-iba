import { Component, Input} from '@angular/core';


@Component({
   selector: 'results',
   templateUrl: './results.component.html',
   styleUrls: ['./results.component.css']
})

export class ResultsComponent{
   @Input() matches;
   constructor() { }
}
