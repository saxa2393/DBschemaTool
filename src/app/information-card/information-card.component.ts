import { InfoService } from './../services/info.service';
import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';
@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss'],
})

export class InformationCardComponent implements OnInit, AfterViewInit {
  constructor(public infoExchange: InfoService, elementRef: ElementRef) {
    // tslint:disable-next-line: no-unused-expression
    elementRef.nativeElement.parentElement;
  }

  @ViewChild(InformationCardComponent, { static: false }) hello: InformationCardComponent;
  @Input() initialStep: number;
  @Input() step1: string;
  @Input() step: number;
  @Input() headerToPass: number;
  buttonToShow = 'Hide';
  hiddenButton = false;
  testArray = [];
  header: string;
  addField = [];
  entry1 = '';
  description1 = '';
  // tslint:disable-next-line: ban-types
  objectForDB: Object;
  allTypes = ['UNSET_DATA_TYPE', 'BYTES', 'BOOLEAN', 'NUMBER', 'STRING', 'ENUM', 'STRUCT', 'LAT_LONG'];
  dataTypeIndex1 = -1;
  numberOfFields = [];
  numberOfCards = 0;
  myArray = [];
  confirmButton = true;
  showAddButton = true;
  enableStruct = true;
  disableCard = false;
  isChecked = false;
  myKey: string;
  myStruct = [];
  newStruct;
  enaleStruct = false;
  incrementHeader = 0;
  headerArray = [];

  @Output() messageEvent = new EventEmitter();
  ngAfterViewInit(): void {
    const input = document.getElementById('myheader');
    this.incrementHeader = Number(input);
  }
  hiddenShowButton() {
    if (this.hiddenButton) {
      this.hiddenButton = false;
      this.buttonToShow = 'Hide';

    }
    else {
      this.hiddenButton = true;
      this.buttonToShow = 'Show';

    }
  }

  addCol() {
    console.log(this.addField);
    const x = this.addField.length;
    const y = this.addField[x - 1] + 1;
    this.addField.push(y);

  }
  removeCol() {
    this.addField.pop();

  }
  ngOnInit() {
    if (this.headerToPass) {
      this.header = String(this.headerToPass);
      // const mystring =   this.header;

      // const usingSplit = mystring.split('.');
      // console.log(usingSplit);
      this.headerArray.push(String(this.headerToPass));
    }
    else {
      this.header = this.step1 + '.' + String(this.step);
      const mystring = this.header;
      const usingSplit = mystring.split('.');
      // console.log(usingSplit);
      usingSplit.forEach(element => {
        this.headerArray.push(element);
      });
      // this.headerArray.push(this.step1);
      // this.headerArray.push('.');
      // this.headerArray.push(String(this.step));
    }
    this.myKey = String(this.step1) + '.' + String(this.step);
    this.newStruct = {
      title: this.headerArray,
      name: '',
      description: '',
      dataType: '',
      required: '',
      structProperties: []
    };
  }
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

  confirmAll() {

    if (this.dataTypeIndex1 === 6 || this.dataTypeIndex1 > 7) {
      this.dataTypeIndex1 = 6;
      this.newStruct = {
        title: this.headerArray,
        name: this.entry1,
        description: this.description1,
        dataType: this.dataTypeIndex1,
        required: this.isChecked,
        structProperties: []
      };
      this.enableStruct = false;
      this.infoExchange.receiveDataFromComponent(this.newStruct);
    }
    else {
      this.newStruct = {
        title: this.headerArray,
        name: this.entry1,
        description: this.description1,
        dataType: this.dataTypeIndex1,
        required: this.isChecked
      };
      this.infoExchange.receiveDataFromComponent(this.newStruct);
    }
    this.disableCard = true;
    this.confirmButton = true;
    this.numberOfCards = 0;

  }

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
