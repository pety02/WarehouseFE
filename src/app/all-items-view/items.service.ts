import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemDTO } from './models/ItemDTO.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private readonly baseUrl = '/api/locations';

  constructor(private http: HttpClient) {}

  getAllItemsByLocationId(locationId: string): Observable<ItemDTO[]> {
    return this.http.get<ItemDTO[]>(`${this.baseUrl}/${locationId}/items`);
  }

  updateItem(locationId: string, item: ItemDTO): Observable<ItemDTO> {
    // Assuming your backend exposes a PUT endpoint at /api/items/:id
    return this.http.put<ItemDTO>(`/api/items/${item.id}`, item);
  }

  deleteItem(locationId: string, itemId: string): Observable<void> {
    // Assuming your backend exposes a DELETE endpoint at /api/items/:id
    return this.http.delete<void>(`/api/items/${itemId}`);
  }

  addItem(locationId: string, item: ItemDTO): Observable<ItemDTO> {
    return this.http.post<ItemDTO>(`${this.baseUrl}/${locationId}/items`, item);
  }
}
