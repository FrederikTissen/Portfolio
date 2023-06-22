import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-right',
  templateUrl: './project-right.component.html',
  styleUrls: ['./project-right.component.scss']
})
export class ProjectRightComponent implements OnInit {
  @Input() project: any;
  header: any;
  img: any;
  number: any;
  subheader: any;
  description: any;
  linkWeb: any;
  linkGithub: any;



  constructor() {}

  ngOnInit(): void {
    this.header = this.project['header'];
    this.img = this.project['img'];
    this.number = this.project['number'];
    this.subheader = this.project['subheader'];
    this.description = this.project['description'];
    this.linkWeb = this.project['linkWeb'];
    this.linkGithub = this.project['linkGithub'];
  }
}
