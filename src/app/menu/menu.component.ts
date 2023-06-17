import { Component, Input, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
public menuIsOpen: boolean = false;

  constructor(private dataService: DataService) {}

  
  ngOnInit() {
    this.dataService.dataEmitter.subscribe((value) => {
      this.menuIsOpen = value;
    })
  }

  closeMenu() {
    this.menuIsOpen = false;
  }
}
