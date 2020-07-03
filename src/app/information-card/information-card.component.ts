import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss'],
})

export class InformationCardComponent implements OnInit {

  @ViewChild('mycard', { static: false }) cardElement;
  @Input() step: string;
  @Input() step1: string;

  constructor() { }
  header: string;


  addField = [];
  addCol() {
    this.addField.push(1);

  }
  removeCol() {
    this.addField.pop();

  }
  ngOnInit() {
    this.header = this.step;
  }
  entry1: string='';
  description1: string='';
  objectForDB: Object;
  allTypes = ["UNSET_DATA_TYPE", "BYTES", "BOOLEAN", "NUMBER", "STRING", "ENUM", "STRUCT", "LAT_LONG"];
  dataTypeIndex1: number = -1;
  numberOfFields = [];
  numberOfCards = 0;
  myArray = [];
  confirmButton = true;
  showAddButton = true;
  enableStruct = false;

  disableCard = false;

  @Output() messageEvent = new EventEmitter();
  enableButton() {
    if (this.dataTypeIndex1 === -1 || this.description1 === '' || this.entry1 === '') {

      this.confirmButton = true;
      console.log(this.enableStruct + "1")
    } else {
      if (this.dataTypeIndex1 === 6) {
        this.showAddButton = false;
        this.enableStruct = true;
        console.log(this.enableStruct + "2")


      }
      console.log(this.enableStruct + "3")

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
    this.dataTypeIndex1 = -1;
  }
}
