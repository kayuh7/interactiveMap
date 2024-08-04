import { Component , OnInit, ElementRef, Renderer2 } from '@angular/core';
import { WorldBankService , CountryData } from '../worldbank.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private worldBankService: WorldBankService,
   ) {}

  ngOnInit() {
    const paths = this.el.nativeElement.querySelectorAll('path');
    paths.forEach((path: SVGPathElement) => {
      this.renderer.listen(path, 'click', (event) => this.onCountryClick(event, path.getAttribute('id')));
    });
  }

  onCountryClick(event: MouseEvent, countryCode: string | null) {
      if (countryCode) {
        this.worldBankService.getCountryData(countryCode).subscribe(
          (data: CountryData[]) => {
            this.worldBankService.setCountryData(data);
            console.log(this.worldBankService.setCountryData(data));
          },
        );
      }
    }
}
