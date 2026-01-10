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
    return this.http
      .post<EmployeeLoginResponseDTO>(`${this.baseUrl}/login`, credentials)
      .pipe(
        tap(response => {
          this.loggedInUser = response;
          localStorage.setItem('user', JSON.stringify(response));
        })
      );
  }

  getUser(): EmployeeLoginResponseDTO | null {
    if (this.loggedInUser) {
      return this.loggedInUser;
    }

    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      return null;
    }

    this.loggedInUser = JSON.parse(storedUser);
    return this.loggedInUser;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
