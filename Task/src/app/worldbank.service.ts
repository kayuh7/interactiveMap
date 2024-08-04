import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CountryData {
  id: string;
  name: string;
  capitalCity: string;
  region: {
    value: string;
  };
  incomeLevel: {
    value: string;
  };
  longitude: string;
  latitude: string;
}

@Injectable({
  providedIn: 'root'
})

export class WorldBankService {
  private baseUrl = 'https://api.worldbank.org/v2/country';
  private countryDataSubject = new BehaviorSubject<CountryData[]>([]);
  countryData$ = this.countryDataSubject.asObservable();

  constructor(private http: HttpClient) { }

  getCountryData(countryCode: string): Observable<CountryData[]> {
    const url = `${this.baseUrl}/${countryCode}?format=json`;
    return this.http.get<any>(url).pipe(
      map(response => response[1] as CountryData[])
    );
  }

  setCountryData(countryData: CountryData[]) {
    this.countryDataSubject.next(countryData);
   }
 }
