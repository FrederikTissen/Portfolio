import { Component, Input, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public menuIsOpen: boolean = true;

  
  constructor(public dataService: DataService) {

  }

  closeMenu() {
    this.dataService.raiseDataEmitterEvent(this.menuIsOpen);
    this.menuIsOpen = false;
  }

}
