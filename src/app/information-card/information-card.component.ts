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
  // @Input() step2: number;
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
    }
    else {
      this.header = this.step1 + '.' + String(this.step);


    }



    this.myKey = String(this.step1) + '.' + String(this.step);

    this.newStruct = {
      title: this.myKey,
      name: '',
      description: '',
      dataType: '',
      required: '',
      structProperties: ''
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
        title: this.header,
        name: this.entry1,
        description: this.description1,
        dataType: this.dataTypeIndex1,
        required: this.isChecked,
        structProperties: this.myStruct

      };
      this.infoExchange.receiveDataFromComponent(this.newStruct);
      console.log(this.newStruct);
      this.enableStruct = false;

    }
    else {
      this.newStruct = {
        title: this.header,
        name: this.entry1,
        description: this.description1,
        dataType: this.dataTypeIndex1,
        required: this.isChecked,
        structProperties: this.myStruct

      };
      console.log(this.newStruct);
      this.infoExchange.receiveDataFromComponent(this.newStruct);

    }
    this.disableCard = true;
    this.confirmButton = true;
    this.numberOfCards = 0;
    let x = this.infoExchange.retrieveMyData();
    console.log(x);
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
