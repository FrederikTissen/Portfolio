import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  inputEmailIsFocused: any;
  inputNameIsFocused: any;
  inputMessageIsFocused: any;
  successEmail: any;

  constructor(private dataService: DataService) {

  }


  openLegalNotice() {
    this.dataService.raiseDataEmitterEventLegal(true);
  }


  moveLabel(name: any) {
    let label: any = document.querySelector(`label[for="inputLabel${name}"]`);
    label.style.top = '40px';
  }


  resetLabel(name: any) {
    let label: any = document.querySelector(`label[for="inputLabel${name}"]`);
    let input: any = document.querySelector(`input[for="input${name}"]`);
    let warningImg: any = document.querySelector(`img[for="warningImg${name}"]`);
    let warningSpan: any = document.querySelector(`span[for="warningSpan${name}"]`);
    let successImg: any = document.querySelector(`img[for="success${name}"]`);

    input = input.value;

    if (input.length > 0) {
      this.returnSuccess(label, warningImg, warningSpan, successImg);
    } else {
      this.returnFail(label, warningImg, warningSpan, successImg);
    }
  }


  resetLabelMessage(name: any) {
    let label: any = document.querySelector(`label[for="inputLabel${name}"]`);
    let textarea: any = document.querySelector(`textarea[for="input${name}"]`);
    let warningImg: any = document.querySelector(`img[for="warningImg${name}"]`);
    let warningSpan: any = document.querySelector(`span[for="warningSpan${name}"]`);
    let successImg: any = document.querySelector(`img[for="success${name}"]`);

    textarea = textarea.value;

    if (textarea.length > 0) {
      this.returnSuccess(label, warningImg, warningSpan, successImg);
    } else {
      this.returnFail(label, warningImg, warningSpan, successImg);
    }
  }


  returnSuccess(label: any, warningImg: any, warningSpan: any, successImg: any) {
    label.style.top = '40px';
    warningSpan.style.visibility = "hidden";
    warningImg.style.display = "none";
    successImg.style.display = "flex";
  }


  returnFail(label: any, warningImg: any, warningSpan: any, successImg: any) {
    successImg.style.display = "none";
    warningImg.style.display = "flex";
    warningSpan.style.display = "flex";
    warningSpan.style.visibility = "visible";
    label.style.top = '70px';
  }


  hideSuccessIcons() {
    let successImgName: any = document.querySelector('img[for="successName"]');
    let successImgEmail: any = document.querySelector('img[for="successEmail"]');
    let successImgMessage: any = document.querySelector('img[for="successMessage"]');
    successImgName.style.display = "none";
    successImgEmail.style.display = "none";
    successImgMessage.style.display = "none";
    this.successEmail = true;

    setTimeout(() => {
      this.successEmail = false;
    }, 7000);
  }


 sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    this.sendEmail(nameField, messageField);

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
    this.hideSuccessIcons();
  }


  async sendEmail(nameField: any, messageField: any) {
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);

    await fetch('http://frederik-tissen.developerakademie.net/portfolio/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
  }
}
