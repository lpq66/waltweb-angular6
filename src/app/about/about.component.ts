import { Component, OnInit, NgModule } from '@angular/core';
import { NgsRevealModule } from 'ng-scrollreveal';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';


@NgModule({
  declarations: [],
  imports: [NgsRevealModule],
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



  constructor() { }

  ngOnInit(): any {
  }

}