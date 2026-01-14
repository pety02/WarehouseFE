import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeResponseDTO } from './models/employee-sesponse.model';
import { EmployeeUpdateRequestDTO } from './models/employee-update-request.model';

@Injectable({
  providedIn: 'root'
})
class EmployeesService {

  private readonly baseUrl = '/api/employees';

  constructor(private http: HttpClient) {}

  getEmployeeById(id: string): Observable<EmployeeResponseDTO> {
    return this.http.get<EmployeeResponseDTO>(`${this.baseUrl}/${id}`, {
      withCredentials: true
    });
  }

  updateEmployee(
    id: string,
    data: EmployeeUpdateRequestDTO
  ): Observable<EmployeeResponseDTO> {
    return this.http.put<EmployeeResponseDTO>(
      `${this.baseUrl}/${id}`,
      data,
      { withCredentials: true }
    );
  }

  deleteEmployee(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, {
      withCredentials: true
    });
  }

  getAllEmployees(): Observable<EmployeeResponseDTO[]> {
    return this.http.get<EmployeeResponseDTO[]>(`${this.baseUrl}`, {
      withCredentials: true
    });
  }

  createEmployee(
    data: EmployeeUpdateRequestDTO
  ): Observable<EmployeeResponseDTO> {
    return this.http.post<EmployeeResponseDTO>(
      `${this.baseUrl}`,
      data,
      { withCredentials: true }
    );
  }
}

export default EmployeesService;
