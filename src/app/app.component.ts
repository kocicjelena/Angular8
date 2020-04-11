import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { RouterModule} from '@angular/router';
import { MyserviceService } from './myservice.service';

      import {Item} from './item';
      import {ITEMS} from './mock-data';

      @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
      })
      export class AppComponent implements OnInit{
        title = 'app';
        radioSel:any;
        radioSelected:string;
        radioSelectedString:string;
        itemsList: Item[] = ITEMS;
        sel: any;
        search: string;
        value1: string;
        name: any;
        url: '';

          
          constructor(private myservice: MyserviceService, private route:ActivatedRoute,private router:Router) {
            this.itemsList = ITEMS;
            //Selecting Default Radio item here
            this.radioSelected = "Bing";
            this.getSelecteditem();
          }
               ngOnInit() {
    this.myservice.getQuery().subscribe(search => this.value1 = search);
  }
           public updateQuery(value1){
    this.myservice.setQuery(value1);
}
          // Get row item from array  
          getSelecteditem(){
            this.radioSel = ITEMS.find(Item => Item.value === this.radioSelected);
            this.radioSelectedString = JSON.stringify(this.radioSel);
            this.sel = JSON.parse(this.radioSelectedString);
            this.search = this.value1;
            this.url = this.sel.name;
            
          }
          // Radio Change Event
          onItemChange(item){
            this.getSelecteditem();
            this.updateQuery(this.value1);
             this.router.navigateByUrl('/url');
          }

      }
