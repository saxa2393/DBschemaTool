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
  dataType: string;
  numberOfFields = [];
  numberOfCards = 0;
  myArray = [];
  confirmButton = false;
  @Output() messageEvent = new EventEmitter<string>();
  pushData(temp: string, temp1: string, temp2: string) {
    let x = [temp, temp1, temp2]
    this.messageEvent.emit(x);
    this.confirmButton = true;
  }
  createCards(cards: number) {
    for (let i = 1; i <= cards; i++) {
      this.numberOfFields.push(i);
    }
    this.numberOfCards = 0;
    this.dataType = '';
  }
}
