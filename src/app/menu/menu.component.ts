import { Component, Input, OnInit } from '@angular/core';
import { Homepage } from '../homepage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public homepage: any = new Homepage();
  
  constructor(public menuIsOpen: Homepage) {

  }

  closeMenu() {
    this.homepage.menuIsOpen = false;
  }

}
