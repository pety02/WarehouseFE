import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeLoginRequestDTO } from './models/employee-login-request-dto.model';
import { EmployeeLoginResponseDTO } from './models/employee-login-response-dto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = '/api/employees';
  private readonly USER_KEY = 'user';

  private loggedInUser: EmployeeLoginResponseDTO | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: EmployeeLoginRequestDTO): Observable<EmployeeLoginResponseDTO> {
    return this.http.post<EmployeeLoginResponseDTO>(
      `${this.baseUrl}/login`,
      credentials,
      { withCredentials: true } // important for session cookie
    ).pipe(
      tap(response => {
        this.loggedInUser = response;
        localStorage.setItem(this.USER_KEY, JSON.stringify(response));
      }),
      catchError(err => {
        console.error('Login failed', err);
        return throwError(() => err);
      })
    );
  }

  getUser(): EmployeeLoginResponseDTO | null {
    if (this.loggedInUser) return this.loggedInUser;

    const stored = localStorage.getItem(this.USER_KEY);
    if (!stored) return null;

    this.loggedInUser = JSON.parse(stored);
    return this.loggedInUser;
  }

  isAuthenticated(): boolean {
    return !!this.getUser();
  }

  logout(): void {
    this.http.post(`${this.baseUrl}/logout`, {}, { withCredentials: true }).subscribe({
      complete: () => {
        localStorage.removeItem(this.USER_KEY);
        this.loggedInUser = null;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Logout failed', err);
      }
    });
  }
}
