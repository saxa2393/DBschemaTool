import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  componentData = [];

  constructor() { }

  receiveDataFromComponent(set: any) {
    this.componentData.push(set);
    localStorage.setItem('data', JSON.stringify(this.componentData));
  }

  retrieveMyData() {
    const myData = JSON.parse(localStorage.getItem('data'));
    return (myData);

  }
}
