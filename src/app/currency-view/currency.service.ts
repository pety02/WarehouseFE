import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CurrencyDTO {
  name: string;
  abbreviation: string;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private baseUrl = '/api/currencies/';

  constructor(private http: HttpClient) { }

  getCurrencyById(id: string) {
    return this.http.get<CurrencyDTO>(this.baseUrl + id);
  }
}
