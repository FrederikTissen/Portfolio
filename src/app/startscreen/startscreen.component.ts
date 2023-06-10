import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {


    images = ['arrow-down1.png', 'arrow-down3.png', 'arrow-down4.png', 'arrow-down5.png'];
    currentImage = 0;
    showImage = true;
  
    ngOnInit() {

    }
  
    openMenu() {
      
    }

  }


