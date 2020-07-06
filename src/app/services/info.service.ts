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

  getData() {
    return this.componentData;
  }

  myLevel = 2;
  increaseLevel(){
   return this.myLevel++;
  }
}
