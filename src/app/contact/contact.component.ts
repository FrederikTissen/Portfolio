import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  inputEmailIsFocused: any;
  inputNameIsFocused: any;
  inputMessageIsFocused: any;


  constructor(private dataService: DataService) {

  }


  openLegalNotice() {
    this.dataService.raiseDataEmitterEventLegal(true);
  }

  moveLabelName() {
    let label: any = document.querySelector('label[for="inputLabelName"]');
    label.style.top = '40px';
  }

  resetLabelName() {
    let label: any = document.querySelector('label[for="inputLabelName"]');
    let input: any = document.querySelector('input[for="inputName"]');

    let warningImg: any = document.querySelector('img[for="nameWarningImg"]');
    let warningSpan: any = document.querySelector('span[for="nameWarningSpan"]');
    let successImg: any = document.querySelector('img[for="nameSuccess"]');
    
    input = input.value;

    if (input.length > 0) {
      label.style.top = '40px';
      warningSpan.style.visibility = "hidden";
      warningImg.style.display = "none";
      successImg.style.display = "flex";
    } else {
      successImg.style.display = "none";
      warningImg.style.display = "flex";
      warningSpan.style.display = "flex";
      warningSpan.style.visibility = "visible";
      label.style.top = '70px';
    }
  }


  moveLabelEmail() {
    let label: any = document.querySelector('label[for="inputLabelEmail"]');
    label.style.top = '40px';

  }

  resetLabelEmail() {
    let label: any = document.querySelector('label[for="inputLabelEmail"]');
    let input: any = document.querySelector('input[for="inputEmail"]');
    let warningImg: any = document.querySelector('img[for="emailWarningImg"]');
    let warningSpan: any = document.querySelector('span[for="emailWarningSpan"]');
    let successImg: any = document.querySelector('img[for="emailSuccess"]');

    input = input.value;

    if (input.length > 0) {
      label.style.top = '40px';
      warningSpan.style.visibility = "hidden";
      warningImg.style.display = "none";
      successImg.style.display = "flex";
    } else {
      successImg.style.display = "none";
      warningImg.style.display = "flex";
      warningSpan.style.display = "flex";
      warningSpan.style.visibility = "visible";
      label.style.top = '70px';
    }
  }

}
