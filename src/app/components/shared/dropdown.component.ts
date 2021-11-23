import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DropdownItem } from '../../models/dropdown.model';

@Component({
   selector: 'dropdown-select',
   templateUrl: './dropdown.component.html',
   styleUrls: ['./dropdown.component.css']
})


export class DropdownComponent implements OnInit{
   @Input() items: DropdownItem[];
   @Input() title: string
   @Output() selectedEmitter = new EventEmitter();
   selectedValue: number;
   myPlaceholder: string
   constructor() {
   }

   ngOnInit() {
     this.myPlaceholder = 'Select ' + this.title;
   }

  // tslint:disable-next-line:typedef
   onChange(event) {
     if (event) {
         event.sortBy = this.title.toLocaleLowerCase();
      }
      else {
         event = {
            id: 0,
            name: 'all',
            sortBy: this.title.toLocaleLowerCase()
         };
      }
     this.selectedEmitter.emit(event);

   }
   onClear(event: any): void  {
      console.log('clear');
   }
}

