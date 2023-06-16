import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-left',
  templateUrl: './project-left.component.html',
  styleUrls: ['./project-left.component.scss']
})
export class ProjectLeftComponent {
  @Input() project: any;

  header: any;
  img: any;
  number: any;
  subheader:  any;
  description: any;
  linkWeb: any;
  linkGithub: any;


    constructor(){

}

ngOnInit(): void {
  console.log(this.project);
  console.log(this.project['description']);

  this.header = this.project['header'];
  this.img = this.project['img'];
  this.number = this.project['number'];
  this.subheader =  this.project['subheader'];
  this.description = this.project['description'];
  this.linkWeb = this.project['linkWeb'];
  this.linkGithub = this.project['linkGithub'];


}


}
