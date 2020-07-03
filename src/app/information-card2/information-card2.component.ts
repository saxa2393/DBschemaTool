import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-information-card2',
  templateUrl: './information-card2.component.html',
  styleUrls: ['./information-card2.component.scss'],
})
export class InformationCard2Component implements OnInit {

  
  @ViewChild('mycard', { static: false }) cardElement;
  @Input() step:string;
  constructor() { }
  header : string;
  ngOnInit() { 
    this.header = this.step;
     console.log(this.header)
  }
  entry: string;
  description: string;
  objectForDB: Object;
  allTypes = ["UNSET_DATA_TYPE", "BYTES", "BOOLEAN", "NUMBER", "STRING", "ENUM", "STRUCT", "LAT_LONG"];
  dataTypeIndex: number = -1;
  numberOfFields = [];
  numberOfCards = 0;
  myArray = [];
  confirmButton = true;
  disableCard = false;

  @Output() messageEvent = new EventEmitter();
  enableButton() {
    if (this.dataTypeIndex === -1 || this.description === '' || this.entry === '') {

      this.confirmButton = true;

    } else {

      this.confirmButton = false;

    }
  }

  pushData(temp: string, temp1: string, temp2: number) {
    let x = {
      name: temp,
      description: temp1,
      dataType: temp2,
      required: this.isChecked
    }
    this.messageEvent.emit(x);
    this.confirmButton = true;
    this.disableCard = true;

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
