import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EmployeeCreateRequestDTO} from './models/employee-create-request-dto.model';
import {EmployeeResponseDTO} from './models/employee-register-response-dto.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = '/api/employees'; // Matches your controller @PostMapping

  constructor(private http: HttpClient) {}

  registerEmployee(employee: EmployeeCreateRequestDTO): Observable<EmployeeResponseDTO> {
    employee.role = "66666666-6666-6666-6666-666666666666"; // Worker role - if there is need after the registration
    // any of the ADMIN users will be able to change the role of the employee

    // the address of central office - all employees start from here and after that an ADMIN user can change
    // their working place
    employee.locationName = "Fresh Food Warehouse";
    employee.locationAddress = {
      country: "Bulgaria",
      city: "Pleven",
      zip: "5800",
      street: "Varshava",
      no: "128"
    };

    return this.http.post<EmployeeResponseDTO>(this.baseUrl, employee);
  }
}
