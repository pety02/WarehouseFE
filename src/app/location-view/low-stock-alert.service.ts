import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LowStockAlertDTO} from './models/LowStockAlertDTO.model';

@Injectable({
  providedIn: 'root'
})
export class LowStockAlertService {
  private baseUrl = '/api/low_stock_alerts';

  constructor(private http: HttpClient) {}

  predict(): Observable<LowStockAlertDTO> {
    return this.http.post<LowStockAlertDTO>(
      '/api/low_stock_alerts',
      {},
      { withCredentials: true }
    );
  }

}
