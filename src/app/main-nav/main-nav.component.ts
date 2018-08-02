import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { PageScrollConfig } from 'ngx-page-scroll';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations: [
    trigger('openNav', [
      state('show', style({
        transform: "translateX(0)"
      })),
      state('hide', style({
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-in'))
    ]),
    trigger('btn', [
      state('open', style({
        transform: "rotate(190deg)"
      })),
      state('close', style({
        transform: "rotate(0deg)"
      })),
      transition('open => close', animate('300ms ease-out')),
      transition('close => open', animate('300ms ease-in'))
    ])
  ]
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
  mobileNavLinks: any;

  navLinks = [{
    anchor: '#about', name: 'About me', id: 1
  }, {
    anchor: '#wcid', name: 'What can I do for you', id: 2
  }, {
    anchor: '#portfolio', name: 'Portfolio', id: 3
  }, {
    anchor: '#testimonials', name: 'Testimonials', id: 4
  }, {
    anchor: '#contact', name: 'Contact', id: 5
  }]

  getDistance = () => {
    this.top = this.stickyNav.offsetTop;
    return this.top;
  }

  show = false
  open = false

  get openName() {
    return this.open ? 'open' : 'close'
  }
  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show
  }

  btnToggle() {
    this.open = !this.open
  }

  selectedIndex: number;
  select(index: number) {
    this.selectedIndex = index;
  }


  @HostListener('window:scroll', ['$event'])
  onScroll($event): void {
    this.stickyNav = this.elRef.nativeElement.querySelector('.main-nav');
    const mobileNav = this.elRef.nativeElement.querySelector('.main-nav--mobile')
    this.offset = window.pageYOffset;
    this.distance = this.getDistance() - this.offset;
    if (this.distance <= 0 && !this.stuck) {
      this.stickyNav.classList.add('sticky');
      mobileNav.classList.add('sticky');
      this.stuck = true;
    } else if (this.stuck && this.offset <= this.stickPoint) {
      this.stickyNav.classList.remove('sticky');
      this.stuck = false;
    }

    if (this.stuck && this.offset <= 50) {
      mobileNav.classList.remove('sticky');
    }
  }

  mobNavLinks() {
    this.mobileNavLinks = this.elRef.nativeElement.querySelectorAll('.item-link--mobile')
    console.log(this.mobileNavLinks)
    this.mobileNavLinks.forEach(item => {
      this.show = false
      this.open = false
    })
  }

  ngOnInit() {
    this.mobNavLinks()
  }

}
