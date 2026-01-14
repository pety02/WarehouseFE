import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TransferResponseDTO} from './models/transfer-response.model';
import {TransferCreateRequestDTO} from './models/transfer-create-request.model';
import {TransferUpdateRequestDTO} from './models/transfer-update-request.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private readonly baseUrl = '/api/transfers';

  constructor(private http: HttpClient) {}

  getAllTransfers(): Observable<TransferResponseDTO[]> {
    return this.http.get<TransferResponseDTO[]>(this.baseUrl);
  }

  getTransferById(id: string): Observable<TransferResponseDTO> {
    return this.http.get<TransferResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createTransfer(payload: TransferCreateRequestDTO): Observable<TransferResponseDTO> {
    return this.http.post<TransferResponseDTO>(this.baseUrl, payload);
  }

  updateTransfer(id: string, payload: TransferUpdateRequestDTO): Observable<TransferResponseDTO> {
    return this.http.put<TransferResponseDTO>(`${this.baseUrl}/${id}`, payload);
  }

  deleteTransfer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
