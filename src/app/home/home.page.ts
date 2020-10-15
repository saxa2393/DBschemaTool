// import { InformationCardComponent } from './../information-card/information-card.component';
import { Component } from '@angular/core';
import { InfoService } from './../services/info.service';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private infoExchange: InfoService,
    private alertController: AlertController,
    private http: HttpClient
  ) {}
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

    // for every depth level insert the element in the corresponsive array.
    x.forEach((element) => {
      const titleLength = element.title.length;
      if (titleLength === 1) {
        this.array1.push(element);
      } else if (titleLength === 2) {
        this.array2.push(element);
      } else if (titleLength === 3) {
        this.array3.push(element);
      } else if (titleLength === 4) {
        this.array4.push(element);
      } else if (titleLength === 5) {
        this.array5.push(element);
      } else if (titleLength === 6) {
        this.array6.push(element);
      }
    });

    const t = this.confirm();
    console.log("test : "+ t)
    const jsonForDB  = JSON.parse(t);
    this.http
      .post('http://localhost:8080/api/tutorials/create', jsonForDB)
      .subscribe(
        (data) => {
          console.log('post Request is successful ', data);
        },

        (error) => {
          console.log('Error', error);
        }
      );
  }
  confirm() {
    // the number of the array (ex: 5 , 6) indicates the depth in which the search start
    // At the moment the app can handle up to to 6 element depth.
    // Example : 1.2.1.1.1.1
    this.array5.forEach((element) => {
      this.array6.forEach((element2) => {
        if (
          element.title[0] === element2.title[0] &&
          element.title[1] === element2.title[1] &&
          element.title[2] === element2.title[2] &&
          element.title[3] === element2.title[3] &&
          element.title[4] === element2.title[4]
        ) {
          // I want to exclude the title field from the final JSON
          const { title, ...rest } = element2;
          element.structProperties.push(rest);
        }
      });
    });
    this.array4.forEach((element) => {
      this.array5.forEach((element2) => {
        if (
          element.title[0] === element2.title[0] &&
          element.title[1] === element2.title[1] &&
          element.title[2] === element2.title[2] &&
          element.title[3] === element2.title[3]
        ) {
          // element.structProperties.push(element2);
          const { title, ...rest } = element2;

          element.structProperties.push(rest);
        }
      });
    });
    this.array3.forEach((element) => {
      this.array4.forEach((element2) => {
        if (
          element.title[0] === element2.title[0] &&
          element.title[1] === element2.title[1] &&
          element.title[2] === element2.title[2]
        ) {
          // element.structProperties.push(element2);
          const { title, ...rest } = element2;
          element.structProperties.push(rest);
        }
      });
    });
    this.array2.forEach((element) => {
      this.array3.forEach((element2) => {
        if (
          element.title[0] === element2.title[0] &&
          element.title[1] === element2.title[1]
        ) {
          // element.structProperties.push(element2);
          const { title, ...rest } = element2;
          element.structProperties.push(rest);
        }
      });
    });
    this.array1.forEach((element) => {
      this.array2.forEach((element2) => {
        if (element.title[0] === element2.title[0]) {
          // tslint:disable-next-line: no-shadowed-variable
          // I want to exclude the title field from the final JSON
          const { title, ...rest } = element2;
          element.structProperties.push(rest);
        }
      });
    });

    this.array1.forEach((element) => {
      // I want to exclude the title field from the final JSON
      delete element.title;
    });
    const efactorySchema = {
      action: 1,
      schemaCreate: {
        schemaName: this.schemaName,
        description: this.description,
        properties: this.array1,
      },
    };

    // #2 Converting the object to JSON...
    const json1 = JSON.stringify(efactorySchema);
    return (json1);
  }

  // alert to confirm the DB schema is finished
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'alertCancel',
      message: ' <strong>Are you sure you want to submit your JSON?</strong>',
      buttons: [
        {
          text: 'YES',
          cssClass: 'yesButton',
          handler: () => {
            this.createJSONButton();
          },
        },
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'noButton',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
      ],
    });
    await alert.present();
  }
}
