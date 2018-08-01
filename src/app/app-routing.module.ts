import { AboutComponent } from './about/about.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '#top',
    component: TopbarComponent
  },
  {
    path: '#about',
    component: AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
