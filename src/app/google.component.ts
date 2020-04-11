import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
@Component({
   selector: 'app-google-cmp',
   templateUrl: './google.component.html',
   styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {
   
   search: any;
   value1: any;
   //newcomponent = "THIS IS THE GOOGLE COMPONENT";
   constructor(private myservice: MyserviceService) {}
          ngOnInit() {
    this.myservice.getQuery().subscribe(search => this.value1 = search);
  }
}
