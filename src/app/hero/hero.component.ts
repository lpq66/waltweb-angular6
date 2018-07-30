import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  title: any;
  subTitle: any;
  event: MouseEvent;
  clientX = 0;
  clientY = 0;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  moveX = 0;
  moveY = 0;

  @HostListener('mousemove', ['$event'])
  moveIt(event: MouseEvent): void {
    this.title = this.elRef.nativeElement.querySelector('.hero-title');
    this.subTitle = this.elRef.nativeElement.querySelector('.hero-sub-title');
    this.clientX = event.clientX;
    this.clientY = event.clientY;
    this.moveX = (this.windowWidth / 100) - this.clientX * 0.1;
    this.moveY = (this.windowHeight / 4) - this.clientY * 0.5;
    this.title.style.transition = 'all .6s linear';
    this.subTitle.style.transition = 'all .6s linear';
    if (this.windowWidth > 991) {
      this.title.style.transform = `translateX(${this.moveX}px) translateY(${this.moveY}px)`;
      this.subTitle.style.transform = `translateX(${this.moveY}px) translateY(${this.moveX}px)`;
    } else {
      this.title.style.transform = `translateX(0px) translateY(0px)`;
      this.subTitle.style.transform = `translateX(0px) translateY(0px)`;
    }

  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const titleItem = this.elRef.nativeElement.querySelectorAll('.hero div')
    titleItem.forEach(item => {
      item.classList.add('animate')
    })
  }

  ngOnInit(): any {

  }

}
