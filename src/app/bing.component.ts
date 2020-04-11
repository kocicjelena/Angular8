import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-bing',
  templateUrl: './bing.component.html',
  styleUrls: ['./bing.component.css']
})
export class BingComponent implements OnInit {

   search: any;
   value1: any;
   constructor(private myservice: MyserviceService) {}
          ngOnInit() {
    this.myservice.getQuery().subscribe(search => this.value1 = search);
  }
  

}
