import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  arrowLeft = faAngleLeft

  contactMe = [
    {
      icon: faPhone, color: '4caf50', link: 'tel:13123204213', id: 'phone'
    },
    {
      icon: faEnvelope, color: 'ffc107', link: 'mailto:vldlbrk@gmail.com', id: 'email'
    },
    {
      icon: faFacebookF, color: '3f51b5', link: 'https://www.facebook.com/walter.loburak', id: 'fb'
    },
    {
      icon: faTwitter, color: '2196f3', link: 'https://twitter.com/vldlbrk', id: 'twitter'
    },
    {
      icon: faLinkedinIn, color: '1565c0', link: 'https://www.linkedin.com/in/lpq66', id: 'linkedin'
    },
    {
      icon: faGooglePlusG, color: 'ef5350', link: 'https://plus.google.com/u/0/111743041512359692263', id: 'gplus'
    },
  ]

  constructor(public el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset
    const offset = componentPosition - 500
    const contactItem = this.el.nativeElement.querySelectorAll('.contact-content-item')
    const footer = this.el.nativeElement.querySelector('footer')

    if (scrollPosition >= offset) {
      contactItem.forEach(item => {
        item.classList.add('stagger')
      })

    } else {
      contactItem.forEach(item => {
        item.classList.remove('stagger')
      })
    }

    if (scrollPosition >= offset + 100) {
      footer.classList.add('animate')
    } else {
      footer.classList.remove('animate')
    }

  }

  ngOnInit() {
  }

}
