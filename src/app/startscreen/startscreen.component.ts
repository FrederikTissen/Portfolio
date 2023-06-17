import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent  {

  constructor(private dataService: DataService) {}


  openMenu() {
    this.dataService.raiseDataEmitterEvent(true);
  }
}


