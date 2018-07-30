import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';


@Component({
  selector: 'app-wcid',
  templateUrl: './wcid.component.html',
  styleUrls: ['./wcid.component.scss'],
})

export class WcidComponent implements OnInit {

  wcidItems: any = [{
    img: '/../../assets/1.svg', text: 'Website design'
  }, {
    img: '/../../assets/2.svg', text: 'Website development'
  }, {
    img: '/../../assets/3.svg', text: 'PSD to HTML conversion'
  }, {
    img: '/../../assets/4.svg', text: 'Custom theme development'
  }, {
    img: '/../../assets/5.svg', text: 'Website speed optimization'
  }, {
    img: '/../../assets/6.svg', text: 'Troubleshoot and fix errors'
  }, {
    img: '/../../assets/7.svg', text: 'Content & Database migration'
  }, {
    img: '/../../assets/8.svg', text: 'Virus & malware removal'
  }, {
    img: '/../../assets/9.svg', text: 'Logo design'
  }, {
    img: '/../../assets/10.svg', text: 'Business card design'
  }, {
    img: '/../../assets/11.svg', text: 'Search engine optimization'
  }]



  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    const offset = componentPosition - 200
    const wcidItem = this.el.nativeElement.querySelectorAll('.wcid-content-item')

    if (scrollPosition >= offset) {

      wcidItem.forEach(item => {
        item.classList.add('stagger')
      })
    } else {

      wcidItem.forEach(item => {
        item.classList.remove('stagger')
      })
    }

  }


  ngOnInit() {

  }

}
