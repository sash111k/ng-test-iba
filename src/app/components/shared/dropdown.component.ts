// @ts-ignore
import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DropdownItem } from '../../models/dropdown.model';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpParams} from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
   selector: 'dropdown-select',
   templateUrl: './dropdown.component.html',
   styleUrls: ['./dropdown.component.css']
})


export class DropdownComponent implements OnInit{
   @Input() items: DropdownItem[];
   @Input() myPL: string;
   @Output() selectedEmitter = new EventEmitter();
   selectedValue: number;
   constructor(private router: Router, private activatedRoute: ActivatedRoute) {
   }


   ngOnInit(): void{
     // this.activatedRoute.queryParams.subscribe(params => {
     //   this.selectedValue = params[this.myPL.slice(this.myPL.indexOf(' ') + 1).toLocaleLowerCase()]
     //   console.log(this.selectedValue);
     //   this._cd.detectChanges();
     // });
   }

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
     console.log(event, 'from aaaaa');
     console.log(this.selectedValue);
   }
   onClear(event: any): void  {
      console.log('clear');
   }
}

