import { InformationCardComponent } from './../information-card/information-card.component';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { InfoService } from './../services/info.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private infoExchange: InfoService) { }
  schemaName = '';
  description = '';
  addField = [];
  enableStruct = false;
  confirmButton = true;
  array1 = [];
  array2 = [];
  array3 = [];
  array4 = [];
  array5 = [];
  array6 = [];
  addCol() {
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
  createJSONButton() {
    const x = this.infoExchange.retrieveMyData();

    // console.log(x);
    x.forEach(element => {
      const titleLength = (element.title).length;
      if (titleLength === 1) {
        this.array1.push(element);
        console.log(this.array1);

      }
      else if (titleLength === 2) {
        this.array2.push(element);
        console.log(this.array2);

      }
      else if (titleLength === 3) {
        this.array3.push(element);
        console.log(this.array3);

      }
      else if (titleLength === 4) {
        this.array4.push(element);
      }
    });
    this.confirm();

  }
  confirm(){
    this.array1.forEach(element => {
      this.array2.forEach(element2 => {
        if (element.title[0] === element2.title[0]){
          element.structProperties.push(element2);
        }

      });
    });
    console.log(this.array1);
  }

}
