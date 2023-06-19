import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[flyInRight]',
})

export class FlyInRightComponent {

  constructor(private el: ElementRef) {}

  isTestDivScrolledIntoView: boolean = false;


  @HostListener('window:scroll')
  isScrolledIntoView() {
    if (this.el) {
      let element = this.el.nativeElement;
      let rect = element.getBoundingClientRect();
      let topShown: boolean = rect.top >= 0;
      let bottomShown: boolean = rect.bottom <= window.innerHeight;
      this.isTestDivScrolledIntoView = topShown && bottomShown;
      

      if (this.isTestDivScrolledIntoView) {
        element.classList.remove('text-right');
        element.classList.add('text-right-Slide');
      } 
    }
  }
}
