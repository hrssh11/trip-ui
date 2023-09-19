import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'trips', component: TripsComponent },
  // { path: 'login', component: LoginComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
