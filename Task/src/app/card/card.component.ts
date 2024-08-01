import { Component, OnInit } from '@angular/core';
import { WorldBankService } from '../worldbank.service';
import { CountryData } from '../models/data.models';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  title = 'worldBank-api';
  countryData: CountryData[] = [];

  constructor( private worldBankService: WorldBankService){}

  ngOnInit() {
    this.fetchCountryData('CN'); // Example for India
  }

  fetchCountryData(countryCode: string) {
    this.worldBankService.getCountryData(countryCode).subscribe(
      (data: CountryData[]) => {
        this.countryData = data;
        console.log(this.countryData);
      },
    );
  }
}
