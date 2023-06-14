import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})

export class LegalNoticeComponent {


  public legalNoticeIsOpen: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.dataEmitterLegal.subscribe((value) => {
      this.legalNoticeIsOpen = value;
    })
  }

  closeLegalNotice() {
    this.legalNoticeIsOpen = false;
  }

}
