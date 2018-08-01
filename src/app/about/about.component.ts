import { Component, OnInit, NgModule, ElementRef, HostListener } from '@angular/core';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';

@NgModule({
  declarations: [],
  imports: [],
})

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  card = {
    title: 'Little about me'
  }

  constructor(private elRef: ElementRef) {

  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.elRef.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    const offset = componentPosition - 300
    const posOffset = componentPosition + 350
    const card = this.elRef.nativeElement.querySelector('.about-card')
    const skews = this.elRef.nativeElement.querySelectorAll('.skew')

    if (scrollPosition >= offset) {
      card.classList.add('animate')
    } else {
      card.classList.remove('animate')
    }

    if (scrollPosition >= posOffset) {
      skews.forEach(el => {
        el.classList.add('animate')
      })
    } else {
      skews.forEach(el => {
        el.classList.remove('animate')
      })
    }

  }

  ngOnInit(): any {
  }

}