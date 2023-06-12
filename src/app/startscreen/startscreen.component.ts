import { Component, Input, OnInit } from '@angular/core';
import { Homepage } from '../homepage';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent  {

  public homepage: any = new Homepage();

  constructor(public menuIsOpen: Homepage) {

  }

  openMenu() {
    this.homepage.menuIsOpen = true;
  }

}


