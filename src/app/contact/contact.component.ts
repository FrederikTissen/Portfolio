import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private dataService: DataService) {

  }


  openLegalNotice() {
    this.dataService.raiseDataEmitterEventLegal(true);
  }

}
