import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryData } from './models/data.models';

@Injectable({
  providedIn: 'root'
})
export class WorldBankService {
  private baseUrl = 'https://api.worldbank.org/v2';

  constructor(private http: HttpClient) { }

  getCountryData(countryCode: string): Observable<CountryData[]> {
    const url = `${this.baseUrl}/country/${countryCode}?format=json`;
    return this.http.get<any>(url).pipe(
      map(response => response[1] as CountryData[]) // Adjust based on actual API response structure
    );
  }
 }
