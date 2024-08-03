import { Component , OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const paths = this.el.nativeElement.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      this.renderer.listen(path, 'click', (event) => this.onCountryClick(event, path.getAttribute('name')));
    });
  }

  onCountryClick(event: MouseEvent, countryName: string | null) {
    if (countryName) {
    console.log('Country clicked:', countryName);
    }
  }
}
