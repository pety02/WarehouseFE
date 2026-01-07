import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Employee} from './models/employee.model';
import {Item} from './models/item.model';
import {WarehouseZone} from './models/warehouse-zone.model';
import {StockAvailability} from './models/stock-availability.model';
import {Location} from './models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private baseUrl = '/api/locations';

  constructor(private http: HttpClient) {}

  getLocationById(id: string): Observable<Location> {
    return this.http.get<Location>(`${this.baseUrl}/${id}`);
  }

  getEmployeesByLocation(id: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/${id}/employees`);
  }

  getItemsByLocation(id: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/${id}/items`);
  }

  getWarehouseZonesByLocation(id: string): Observable<WarehouseZone[]> {
    return this.http.get<WarehouseZone[]>(`${this.baseUrl}/${id}/warehouse_zones`);
  }

  getStockAvailabilitiesByLocation(id: string): Observable<StockAvailability[]> {
    return this.http.get<StockAvailability[]>(`${this.baseUrl}/${id}/stock_availabilities`);
  }
}
