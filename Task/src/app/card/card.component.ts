import { Component, OnInit } from '@angular/core';
import { WorldBankService , CountryData } from '../worldbank.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  countryData: CountryData[] = [];

  constructor(
      private worldBankService: WorldBankService,
     ) {}

    ngOnInit() {
      this.worldBankService.countryData$.subscribe(
      (data: CountryData[]) => {
        this.countryData = data;
        console.log(this.countryData)
        },
      )
    }

}
