import { InformationCardComponent } from './../information-card/information-card.component';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { InfoService } from './../services/info.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() { }
  schemaName = '';
  description = '';
  addField = [];
  enableStruct = false;
  confirmButton = true;

  addCol() {
    console.log(this.addField);
    const x = this.addField.length;
    const y = this.addField[x - 1] + 1;
    this.addField.push(y);
  }
  removeCol() {
    this.addField.pop();

  }
  enableButton() {

    if (this.description === '' || this.schemaName === '') {

      this.enableStruct = false;
    } else {
      this.enableStruct = true;
      this.confirmButton = true;

    }
  }

}
