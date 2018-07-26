import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  fb = faFacebookF;
  tw = faTwitter;
  lin = faLinkedinIn;
  gp = faGooglePlusG;
  tmail = faEnvelopeOpen;
  phone = faPhone;

  socialLinks = {
    fb: 'https://www.facebook.com/walter.loburak',
    tw: 'https://twitter.com/vldlbrk',
    lin: 'https://www.linkedin.com/in/lpq66',
    gp: 'https://plus.google.com/u/0/111743041512359692263'
  };

  constructor() { }

  ngOnInit() {
  }

}
