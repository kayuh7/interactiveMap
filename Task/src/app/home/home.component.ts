import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MapComponent } from '../map/map.component';
import { HomeCardComponent } from '../home-card/home-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    MapComponent,
    HomeCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
