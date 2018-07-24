import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  const navLinks = [{
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

  constructor() { }

  ngOnInit() {
  }

}
