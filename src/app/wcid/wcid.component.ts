import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wcid',
  templateUrl: './wcid.component.html',
  styleUrls: ['./wcid.component.scss']
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

  constructor() { }

  ngOnInit() {
  }

}
