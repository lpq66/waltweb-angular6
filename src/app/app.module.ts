import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HeroComponent } from './hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { WcidComponent } from './wcid/wcid.component';
import { PortfolioComponent } from './portfolio/portfolio.component'
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TestiComponent } from './testi/testi.component';
import { ContactComponent } from './contact/contact.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainNavComponent,
    HeroComponent,
    AboutComponent,
    WcidComponent,
    PortfolioComponent,
    TestiComponent,
    ContactComponent,
    PricingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ParallaxModule,
    BrowserAnimationsModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
