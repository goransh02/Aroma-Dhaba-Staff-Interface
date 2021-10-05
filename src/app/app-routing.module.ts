import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './final/homepage/homepage.component';
import { LandingComponent } from './final/landing/landing.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  routes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'homepage', component: HomepageComponent }
  ];
}
