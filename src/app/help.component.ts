import { Component, OnInit } from '@angular/core';

import { MyserviceService } from './myservice.service';
 @Component({
        selector: 'app-help',
        templateUrl: './help.component.html',
        styleUrls: ['./help.component.css']
      })
export class HelpComponent implements OnInit{
search: any;
value1: string;
   constructor(private myservice: MyserviceService) {}

           ngOnInit() {
    this.myservice.getQuery().subscribe(search => this.value1 = search);
  }
}
