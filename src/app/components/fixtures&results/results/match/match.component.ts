import {Component, Input, OnInit} from '@angular/core';
import {MatchItem} from '../../../../models/match.model';
@Component({
   selector: 'match',
   templateUrl: './match.component.html',
   styleUrls: ['./match.component.css']
})

export class MatchComponent {
   @Input() match: MatchItem;
}
