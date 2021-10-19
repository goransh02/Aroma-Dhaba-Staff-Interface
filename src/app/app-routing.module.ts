import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AddItemComponent } from './final/homepage/add-item/add-item.component';
import { HomepageComponent } from './final/homepage/homepage.component';
import { LandingComponent } from './final/landing/landing.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
      { path: 'landing', component: LandingComponent },
      { path: 'Add', component: AddItemComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }