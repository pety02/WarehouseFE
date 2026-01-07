import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EmployeeLoginRequestDTO} from './models/employee-login-request-dto.model';
import {EmployeeLoginResponseDTO} from './models/employee-login-response-dto.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = '/api/employees';

  constructor(private http: HttpClient) {}

  login(credentials: EmployeeLoginRequestDTO): Observable<EmployeeLoginResponseDTO> {
    let employee = this.http.post<EmployeeLoginResponseDTO>(
      `${this.baseUrl}/login`, credentials);
    console.log(employee);
    return employee;
  }
}
