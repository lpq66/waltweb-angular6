import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { getDirectiveInstance } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  stickyNav: any;
  stickPoint: any = 50;
  stuck: boolean = false;
  top: any;
  distance: number;
  offset: number;

  navLinks = [{
    anchor: '#about', name: 'About me'
  }, {
    anchor: '#wcid', name: 'What can I do for you'
  }, {
    anchor: '#portfolio', name: 'Portfolio'
  }, {
    anchor: '#testimonials', name: 'Testimonials'
  }, {
    anchor: '#contact', name: 'Contact'
  }, {
    anchor: '#pricing', name: 'Pricing'
  }]

  getDistance = () => {
    this.top = this.stickyNav.offsetTop;
    return this.top;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll($event): void {
    this.stickyNav = this.elRef.nativeElement.querySelector('.main-nav');
    this.offset = window.pageYOffset;
    this.distance = this.getDistance() - this.offset;
    if (this.distance <= 0 && !this.stuck) {
      this.stickyNav.classList.add('sticky');
      this.stuck = true;
    } else if (this.stuck && this.offset <= this.stickPoint) {
      this.stickyNav.classList.remove('sticky');
      this.stuck = false;
    }
  }



  ngOnInit() {
  }

}
