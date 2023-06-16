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


  moveLabelMessage() {
    let label: any = document.querySelector('label[for = "inputLabelMessage"]');
    label.style.top = '40px';


  }





  resetLabelMessage() {
    let label: any = document.querySelector('label[for = "inputLabelMessage"]');
    let textarea: any = document.querySelector('textarea[for="inputMessage"]');
    let warningImg: any = document.querySelector('img[for="messageWarningImg"]');
    let warningSpan: any = document.querySelector('span[for="messageWarningSpan"]');
    let successImg: any = document.querySelector('img[for="messageSuccess"]');

    textarea = textarea.value;

    if (textarea.length > 0) {
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

  hideSuccessIcons() {
    let successImgName: any = document.querySelector('img[for="nameSuccess"]');
    let successImgEmail: any = document.querySelector('img[for="emailSuccess"]');
    let successImgMessage: any = document.querySelector('img[for="messageSuccess"]');

    successImgName.style.display = "none";
    successImgEmail.style.display = "none";
    successImgMessage.style.display = "none";


    this.successEmail = true;

    setTimeout(() => {

      this.successEmail = false;
    }, 7000);



  }



  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    //Animation anzeigen

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);

    //senden 
    await fetch('http://frederik-tissen.developerakademie.net/portfolio/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';


    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;

    this.hideSuccessIcons();

  }




}
