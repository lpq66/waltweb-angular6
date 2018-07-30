import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import DirectionReveal from 'direction-reveal';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioItems: any = [{
    img: '/../../assets/portfolio/chicagocritic.com-min.png', title: 'chicagocritic.com', link: 'http://chicagocritic.com'
  }, {
    img: '/../../assets/portfolio/myfashionbreak.com-min.png', title: 'myfashionbreak.com', link: 'http://myfashionbreak.com'
  }, {
    img: '/../../assets/portfolio/deskview.co-min.png', title: 'deskview.co', link: 'https://deskview.co'
  }, {
    img: '/../../assets/portfolio/fruitbliss.com-min.png', title: 'fruitbliss.com', link: 'https://fruitbliss.com'
  }, {
    img: '/../../assets/portfolio/www.attorneyatwork.com-min.png', title: 'attorneyatwork.com', link: 'https://attorneyatwork.com'
  }, {
    img: '/../../assets/portfolio/www.profireworks.com-min.png', title: 'profireworks.com', link: 'https://profireworks.com'
  }, {
    img: '/../../assets/portfolio/yourolddog.com-min.png', title: 'yourolddog.com', link: 'http://yourolddog.com'
  }, {
    img: '/../../assets/portfolio/www.ptbycc.com.au-min.png', title: 'ptbycc.co', link: 'http://ptbycc.com.au'
  }]

  lastDir: any;
  list: any;

  constructor(public el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    const offset = componentPosition - 400
    const portItem = this.el.nativeElement.querySelectorAll('.portfolio-content-item')

    if (scrollPosition >= offset) {
      portItem.forEach(item => {
        item.classList.add('staggerp')
      })
    } else {
      portItem.forEach(item => {
        item.classList.remove('staggerp')
      })
    }

  }

  ngOnInit() {
  }

}
