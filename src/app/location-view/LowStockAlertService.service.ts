import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LowStockAlertDTO} from './models/LowStockAlertDTO.model';

@Injectable({
  providedIn: 'root'
})
export class LowStockAlertService {
  private baseUrl = '/api/locations';

  constructor(private http: HttpClient) {}

  predict(): Observable<LowStockAlertDTO> {
    return this.http.post<LowStockAlertDTO>(`${this.baseUrl}`, null);
  }
}
