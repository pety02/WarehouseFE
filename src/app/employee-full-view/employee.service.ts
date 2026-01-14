import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EmployeeResponseDTO} from './models/employee-sesponse.model';
import {EmployeeUpdateRequestDTO} from './models/employee-update-request.model';

@Injectable({
  providedIn: 'root'
})
class EmployeesService {

  private readonly baseUrl = '/api/employees';

  constructor(private http: HttpClient) {}

  getEmployeeById(id: string): Observable<EmployeeResponseDTO> {
    return this.http.get<EmployeeResponseDTO>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: string, data: EmployeeUpdateRequestDTO): Observable<EmployeeResponseDTO> {
    const fireDateIso =
      (data.fireDate as any) instanceof Date
        ? (data.fireDate as unknown as Date).toISOString().split('T')[0]
        : data.fireDate;

    const payload = {
      ...data,
      fireDate: fireDateIso
    };

    return this.http.put<EmployeeResponseDTO>(
      `${this.baseUrl}/${id}`,
      payload,
      { withCredentials: true }
    );
  }

  deleteEmployee(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getAllEmployees(): Observable<EmployeeResponseDTO[]> {
    return this.http.get<EmployeeResponseDTO[]>(`${this.baseUrl}`);
  }

  createEmployee(data: EmployeeUpdateRequestDTO): Observable<EmployeeResponseDTO> {
    return this.http.post<EmployeeResponseDTO>(`${this.baseUrl}`, data);
  }
}

export default EmployeesService
