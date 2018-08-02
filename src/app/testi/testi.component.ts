import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { container } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-testi',
  templateUrl: './testi.component.html',
  styleUrls: ['./testi.component.scss']
})
export class TestiComponent implements OnInit {

  testi: any = [
    {
      text: 'I have dealt with many people - no one is as professional and skilled as Walter. He is VERY capable. If you are looking for someone reliable and qualified, stop looking. Walter is the man for the job!',
      person: 'Mike Hennessy // owner of mybayonne.com'
    },
    {
      text: 'Walter was excellent to work with. Very knowledgeable on WooCommerce and the changes I needed completed. It was a pleasure to work with him. He was fast, knowledgeable and cared about the job he was doing. Highly recommend.',
      person: 'Laura Petterson // owner of dreambiglivelean.com'
    },
    {
      text: ' Very easy to work with and communicate with. Walter made himself very available. Above and beyond what I expected.',
      person: ' Janie Knetzer // owner of yourolddog.com'
    }
  ]

  containerW: any
  iPadPortrait: any

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    let offset = componentPosition - 300
    const posOffset = componentPosition - 600
    const slider = this.el.nativeElement.querySelector('.testi-slider')
    this.iPadPortrait = this.el.nativeElement.querySelector('#testimonials').offsetWidth
    if (this.iPadPortrait == 1024) {
      if (scrollPosition >= posOffset) {
        slider.classList.add('ipad')
      } else {
        slider.classList.remove('ipad')
      }
    }

    if (scrollPosition >= offset) {
      slider.classList.add('animate')
    } else {
      slider.classList.remove('animate')
    }

  }

  ngOnInit() {
    this.containerW = this.el.nativeElement.querySelector('.testi .container').offsetWidth - 30
  }

}
