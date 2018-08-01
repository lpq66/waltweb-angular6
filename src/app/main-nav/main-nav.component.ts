import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { PageScrollConfig } from 'ngx-page-scroll';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor(private elRef: ElementRef) {
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultDuration = 600;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }

  stickyNav: any;
  stickPoint: any = 50;
  stuck: boolean = false;
  top: any;
  distance: number;
  offset: number;
  scrollSpy: any;

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
