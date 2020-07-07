import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  componentData = [];
  constructor() { }

  receiveDataFromComponent(set: any) {
    this.componentData.push(set);
  }

  getData(id : string) {
    return this.componentData[0].title;
  }

  myLevel = 2;
  increaseLevel(){
   return this.myLevel++;
  }
  
  increaseColNumber(temp : number){

  }
}
