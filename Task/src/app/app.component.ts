import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { CardComponent } from './card/card.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { MapCardComponent } from './map-card/map-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    MapComponent,
    CardComponent,
    HomeCardComponent,
    MapCardComponent,
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'D280';
}
