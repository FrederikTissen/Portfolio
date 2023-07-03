import { Component, OnInit } from '@angular/core';
import { ProjectData } from '../project-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projectData!: ProjectData;


  constructor() {}

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    this.projectData = new ProjectData;
  }


}
