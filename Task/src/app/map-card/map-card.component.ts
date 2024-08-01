import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MapComponent } from '../map/map.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-map-card',
  standalone: true,
  imports: [
    NavbarComponent,
    MapComponent,
    CardComponent,
  ],
  templateUrl: './map-card.component.html',
  styleUrl: './map-card.component.css'
})
export class MapCardComponent {

}
