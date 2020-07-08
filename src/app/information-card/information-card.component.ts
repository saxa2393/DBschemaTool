import { InfoService } from './../services/info.service';
import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss'],
})

export class InformationCardComponent implements OnInit,AfterViewInit {

  @ViewChild(InformationCardComponent, {static: false}) hello: InformationCardComponent;

  @Input() initialStep : number;
  @Input() step1: string;
  @Input() step: number;
  
  @Input() headerToPass: number;
  // @Input() step2: number;

  testArray = [];
  constructor(public infoExchange : InfoService,elementRef:ElementRef) {
    elementRef.nativeElement.parentElement
  }
  incrementHeader=0;
  ngAfterViewInit(): void {
    var input = document.getElementById('myheader');
    this.incrementHeader = Number(input);
  }

  buttonToShow = "Hide";
  hiddenButton = false;
  hiddenShowButton(){
    if(this.hiddenButton){
      this.hiddenButton = false;
      this.buttonToShow = "Hide";

    }
    else{
      this.hiddenButton = true;
      this.buttonToShow = "Show";

    }
  }

  header:string;


  addField = [1];
  addCol() {
    console.log(this.addField)
    let x = this.addField.length;
    let y =this.addField[x-1]+1;
    this.addField.push(y);
    
  }
  removeCol() {
    this.addField.pop();

  }
  myKey:string;
  ngOnInit() {
    if(this.headerToPass){
      this.header = String(this.headerToPass);
    }
    else{
      this.header = this.step1+"." +String(this.step);
     

    }
  
   

    this.myKey = String(this.step1) +'.'+ String(this.step);
    
    this.newStruct = {
      title:this.myKey,
      name: '',
      description: '',
      dataType: '',
      required: '',
      structProperties: ''
    }

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
  confirmAll() {
    
    if (this.dataTypeIndex1 === 6||this.dataTypeIndex1 > 7) {
      this.dataTypeIndex1 = 6;
      this.newStruct = {
        title:this.myKey,
        name: this.entry1,
        description: this.description1,
        dataType: this.dataTypeIndex1,
        required: this.isChecked,
        structProperties: this.myStruct

      }      
      this.infoExchange.receiveDataFromComponent(this.newStruct);
      console.log(this.newStruct);
      this.enableStruct = true;

    }
    else {
      this.newStruct = {
        title:this.myKey,
        name: this.entry1,
        description: this.description1,
        dataType: this.dataTypeIndex1,
        required: this.isChecked,
        structProperties: this.myStruct

      }
      console.log(this.newStruct);
      this.infoExchange.receiveDataFromComponent(this.newStruct);

    }
    this.disableCard = true;
    this.confirmButton = true;
    this.numberOfCards = 0;

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
