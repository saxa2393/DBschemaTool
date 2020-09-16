import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  componentData = [];
  myLevel = 2;

  constructor() { }

  receiveDataFromComponent(set: any) {
    this.componentData.push(set);
    localStorage.setItem('data', JSON.stringify(this.componentData));
  }

  getData(id: string) {
    return this.componentData[0].title;
  }

  increaseLevel(){
   return this.myLevel++;
  }

  increaseColNumber(temp: number){

  }

  retrieveMyData() {
    const myData = JSON.parse(localStorage.getItem('data'));
    return (myData);

  }
}
