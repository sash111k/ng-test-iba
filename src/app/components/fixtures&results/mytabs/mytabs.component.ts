import { Component, Input } from '@angular/core';

@Component({
   selector: 'my-tabs',
   templateUrl: './mytabs.component.html',
   styleUrls: ['./mytabs.component.css']
})


export class MyTabsComponent{
   @Input() matches;
   id = 'results';
   tabChange(ids): void {
      this.id = ids;
   }
}
