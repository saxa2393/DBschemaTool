import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  entry : string;
  description : string;
  objectForDB : Object;
  allTypes = ["UNSET_DATA_TYPE", "BYTES", "BOOLEAN", "NUMBER", "STRING", "ENUM","STRUCT","LAT_LONG"];
  dataType : string;
  numberOfFields = [];
  numberOfCards  = 0;

  createCards(cards : number){
    for(let i=1;i<=cards;i++){
      this.numberOfFields.push(i);
    }
    this.numberOfCards  = 0;
    this.dataType = '';
  }
}
