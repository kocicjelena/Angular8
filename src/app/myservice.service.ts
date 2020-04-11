import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

 
     public getQuery(){
        return this.messageSource;
    }

    public setQuery(queryStr: string){
        this.messageSource.next(queryStr);
    }
   
}
