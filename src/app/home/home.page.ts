import { Component, AfterViewInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() { }

  entry: string = '';
  description: string = '';
  objectForDB: Object;
  allTypes = ["UNSET_DATA_TYPE", "BYTES", "BOOLEAN", "NUMBER", "STRING", "ENUM", "STRUCT", "LAT_LONG"];
  dataTypeIndex: number = -1;
  numberOfCards = 0;
  enaleStruct = false;
  myStruct = [];

  confirmAllButton = true;
  isChecked = false;
  requiredButton() {
    if (this.isChecked) {
      this.isChecked = false;
    }
    else {
      this.isChecked = true;
    }
  }

  addField = [];
  addCol() {
    this.addField.push(1);

  }
  removeCol() {
    this.addField.pop();

  }
  enableButton() {
    if (this.dataTypeIndex === -1 || this.description === '' || this.entry === '') {

      this.confirmAllButton = true;

    } else {

      this.confirmAllButton = false;

    }
  }


  message: string;

  receiveMessage($event) {
    this.message = $event;
    this.myStruct.push(this.message);
    console.log(this.myStruct)
  }


  newStruct;
  confirmAll() {

    if (this.dataTypeIndex === 6 || this.dataTypeIndex > 7) {
      this.dataTypeIndex = 6;
      this.newStruct = {
        name: this.entry,
        description: this.description,
        dataType: this.dataTypeIndex,
        required: this.isChecked,
        structProperties: this.myStruct

      }
      console.log(this.newStruct);
      this.allTypes.push(this.newStruct.name);
      this.enaleStruct = true;

    }
    else {
      this.newStruct = {
        name: this.entry,
        description: this.description,
        dataType: this.dataTypeIndex,
        required: this.isChecked,
        structProperties: this.myStruct

      }
      console.log(this.newStruct);
      this.entry = '';
      this.description = '';
      this.dataTypeIndex = -1;
    }

    this.confirmAllButton = true;

    this.numberOfCards = 0;

  }




}
