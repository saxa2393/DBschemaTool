import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss'],
})

export class InformationCardComponent implements OnInit {

  @ViewChild('mycard', { static: false }) cardElement;
  constructor() { }

  ngOnInit() { }
  entry: string;
  description: string;
  objectForDB: Object;
  allTypes = ["UNSET_DATA_TYPE", "BYTES", "BOOLEAN", "NUMBER", "STRING", "ENUM", "STRUCT", "LAT_LONG"];
  dataTypeIndex: number =-1;
  numberOfFields = [];
  numberOfCards = 0;
  myArray = [];
  confirmButton = false;
  @Output() messageEvent = new EventEmitter();
  pushData(temp: string, temp1: string, temp2: number) {
    let x ={
      name:temp,
      description:temp1,
      dataType:temp2,
      required:this.isChecked
    }
    this.messageEvent.emit(x);
    this.confirmButton = true;
  }
  isChecked = false;
  requiredButton() {
    if (this.isChecked) {
      this.isChecked = false;
    }
    else {
      this.isChecked = true;
    }
  }
  createCards(cards: number) {
    for (let i = 1; i <= cards; i++) {
      this.numberOfFields.push(i);
    }
    this.numberOfCards = 0;
    this.dataTypeIndex = -1;
  }
}
