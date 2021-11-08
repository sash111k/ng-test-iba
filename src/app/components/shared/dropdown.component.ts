// @ts-ignore
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownItem } from '../../models/dropdown.model';

@Component({
  // tslint:disable-next-line:component-selector
   selector: 'dropdown-select',
   templateUrl: './dropdown.component.html',
   styleUrls: ['./dropdown.component.css']
})


export class DropdownComponent{
   @Input() items: DropdownItem[];
   @Input() myPL: string;
   @Output() selectedEmitter = new EventEmitter();
   selectedValue: number;

  // tslint:disable-next-line:typedef
   onChange(event) {
      if (event) {
         event.sortBy = this.myPL.slice(this.myPL.indexOf(' ') + 1).toLocaleLowerCase();
      }
      else {
         event = {
            id: 0,
            name: 'all',
            sortBy: this.myPL.slice(this.myPL.indexOf(' ') + 1).toLocaleLowerCase()
         };
      }
      this.selectedEmitter.emit(event);
   }
   onClear(event: any): void  {
      console.log('clear');
   }
}
