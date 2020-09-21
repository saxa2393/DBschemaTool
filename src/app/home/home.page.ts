import { InformationCardComponent } from './../information-card/information-card.component';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { InfoService } from './../services/info.service';
// import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // , public file: File
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
      }
      else if (titleLength === 2) {
        this.array2.push(element);
      }
      else if (titleLength === 3) {
        this.array3.push(element);
      }
      else if (titleLength === 4) {
        this.array4.push(element);
      }
      else if (titleLength === 5) {
        this.array5.push(element);
      }
      else if (titleLength === 6) {
        this.array6.push(element);
      }
    });
    this.confirm();

  }
  uri;
  confirm() {
    // the number of the array (ex: 5 , 6) indicates the depth in 
    this.array5.forEach(element => {
      this.array6.forEach(element2 => {
        if (element.title[0] === element2.title[0] && element.title[1] === element2.title[1]
          && element.title[2] === element2.title[2] && element.title[3] === element2.title[3] && element.title[4] === element2.title[4]) {
          // element.structProperties.push(element2);
          const { title, ...rest } = element2;

          element.structProperties.push(rest);
        }

      });
    });
    this.array4.forEach(element => {
      this.array5.forEach(element2 => {
        if (element.title[0] === element2.title[0] && element.title[1] === element2.title[1]
          && element.title[2] === element2.title[2] && element.title[3] === element2.title[3]) {
          // element.structProperties.push(element2);
          const { title, ...rest } = element2;

          element.structProperties.push(rest);
        }

      });
    });
    this.array3.forEach(element => {
      this.array4.forEach(element2 => {
        if (element.title[0] === element2.title[0] && element.title[1] === element2.title[1] && element.title[2] === element2.title[2]) {
          // element.structProperties.push(element2);
          const { title, ...rest } = element2;

          element.structProperties.push(rest);
        }

      });
    });
    this.array2.forEach(element => {
      this.array3.forEach(element2 => {
        if (element.title[0] === element2.title[0] && element.title[1] === element2.title[1]) {
          // element.structProperties.push(element2);
          const { title, ...rest } = element2;

          element.structProperties.push(rest);
        }

      });
    });
    this.array1.forEach(element => {
      this.array2.forEach(element2 => {
        if (element.title[0] === element2.title[0]) {
          // tslint:disable-next-line: no-shadowed-variable
          const { title, ...rest } = element2;

          element.structProperties.push(rest);
        }

      });

    });
    // console.log(this.array1);


    // #2 Converting the object to JSON...

    // const json = JSON.stringify(this.array1);

    // console.log(json);
    this.array1.forEach(element => {
      delete element.title;

    });
    const efactorySchema = {
      action: 1,
      schemaCreate: {
        schemaName: this.schemaName,
        description: this.description,
        properties: this.array1
      }
    };
    const json1 = JSON.stringify(efactorySchema);
    // this.uri = "data:application/json;charset=UTF-8," + encodeURIComponent(json);

    console.log(json1);
  }

}
