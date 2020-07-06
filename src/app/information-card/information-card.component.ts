import { InfoService } from './../services/info.service';
import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss'],
})

export class InformationCardComponent implements OnInit {

  @ViewChild('mycard', { static: false }) cardElement;
  // @Input() step: number;
  @Input() step1: number;
  header1:number = 2;

  testArray = [];
  constructor(public infoExchange : InfoService) {
   
  }

  showProgress(){
    console.log(this.infoExchange.getData());

  }
  header: number;


  addField = [];
  addCol() {
    this.addField.push(1);

  }
  removeCol() {
    this.addField.pop();

  }
  ngOnInit() {
    this.header= this.infoExchange.increaseLevel()

  }

  entry1: string = '';
  description1: string = '';
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
    } else {
      if (this.dataTypeIndex1 === 6) {
        this.showAddButton = false;
      }

      this.confirmButton = false;

    }
  }
  myStruct = [];
  newStruct;
  enaleStruct = false;
  confirmAll(temp: string, temp1: string, temp2: number) {
    let x = {
      name: temp,
      description: temp1,
      dataType: temp2,
      required: this.isChecked
    }
    this.messageEvent.emit(x);
    this.infoExchange.receiveDataFromComponent(x);

    this.disableCard = true;

    if (this.dataTypeIndex1 === 6||this.dataTypeIndex1 > 7) {
      this.dataTypeIndex1 = 6;
      this.newStruct = {
        name: this.entry1,
        description: this.description1,
        dataType: this.dataTypeIndex1,
        required: this.isChecked,
        structProperties: this.myStruct

      }
      console.log(this.newStruct);
      this.allTypes.push(this.newStruct.name);
      this.enableStruct = true;

    }
    else {
      this.newStruct = {
        name: this.entry1,
        description: this.description1,
        dataType: this.dataTypeIndex1,
        required: this.isChecked,
        structProperties: this.myStruct

      }
      console.log(this.newStruct);

    }
    
    this.confirmButton = true;
  
    this.numberOfCards = 0;

  }
 
  pushData(temp: string, temp1: string, temp2: number) {
    let x = {
      name: temp,
      description: temp1,
      dataType: temp2,
      required: this.isChecked
    }
    this.messageEvent.emit(x);
    this.infoExchange.receiveDataFromComponent(x);

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
