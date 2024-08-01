import { Routes } from '@angular/router';
import {  AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapCardComponent } from './map-card/map-card.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapCardComponent}
];
