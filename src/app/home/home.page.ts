import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { InformationCardComponent } from '../information-card/information-card.component'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() { }

  entry: string;
  description: string;
  objectForDB: Object;
  allTypes = ["UNSET_DATA_TYPE", "BYTES", "BOOLEAN", "NUMBER", "STRING", "ENUM", "STRUCT", "LAT_LONG"];
  dataType: string;
  numberOfFields = [];
  numberOfCards = 0;
  enaleStruct = false;
  testArray = [];
  expression = false;
  createCards(cards: number) {
    for (let i = 1; i <= cards; i++) {
      this.numberOfFields.push(i);
    }
    this.enaleStruct = true;
    this.expression = true;
  }

  message: string;

  receiveMessage($event) {
    this.message = $event;
    this.testArray.push(this.message);
    console.log(this.testArray)
  }



  resetAll(){
      this.numberOfFields = [];
      this.expression = false;
      this.enaleStruct = false;


  }




}
