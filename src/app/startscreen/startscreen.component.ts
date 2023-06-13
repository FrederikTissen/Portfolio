import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent  {
  public menuIsOpen: boolean = false;


  constructor(public dataService: DataService) {

  }




  openMenu() {
    this.dataService.raiseDataEmitterEvent(this.menuIsOpen);
    this.menuIsOpen = true;
  }

}


