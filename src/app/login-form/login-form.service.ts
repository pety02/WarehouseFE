import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import {EmployeeLoginRequestDTO} from './models/employee-login-request-dto.model';
import {EmployeeLoginResponseDTO} from './models/employee-login-response-dto.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = '/api/employees';
  private loggedInUser: EmployeeLoginResponseDTO | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: EmployeeLoginRequestDTO): Observable<EmployeeLoginResponseDTO> {
    return this.http.post<EmployeeLoginResponseDTO>(`${this.baseUrl}/login`, credentials)
      .pipe(
        tap(response => {
          // Log or store the response
          this.loggedInUser = response;
          localStorage.setItem("userId", this.loggedInUser.id);
        })
      );
  }

  getUser(): EmployeeLoginResponseDTO | null {
    return this.loggedInUser;
  }

  logout(): void {
    this.loggedInUser = null;
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
