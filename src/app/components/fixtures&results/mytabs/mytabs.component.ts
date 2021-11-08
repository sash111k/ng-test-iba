import { Component, Input } from "@angular/core";

@Component({
   selector: 'my-tabs',
   templateUrl: './mytabs.component.html',
   styleUrls: ['./mytabs.component.css']
})


export class MyTabsComponent{
   @Input() sorting
   id = 'results'
   tabChange(ids) {
      this.id = ids;
   }
}