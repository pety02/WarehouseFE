import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeResponseDTO } from './models/employee-sesponse.model';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EmployeeUpdateRequestDTO } from './models/employee-update-request.model';
import EmployeeService from './employee.service';

@Component({
  selector: 'app-employee-full-view',
  standalone: true,
  templateUrl: './employee-full-view.component.html',
  styleUrls: ['./employee-full-view.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NavigationBarComponent
  ]
})
export class EmployeeFullViewComponent implements OnInit {

  profileForm!: FormGroup;
  employee!: EmployeeResponseDTO;
  editing = false;
  loading = false;
  updateErrorMessage: string | null = null;

  constructor(
    private employeesService: EmployeeService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadCurrentUser();
  }

  private initForm(): void {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^(0[0-9]{9}|\+359[0-9]{9})$/)]
      ],
      fireDate: [null],
      password: ['', [Validators.minLength(8)]]
    });
  }

  private loadCurrentUser(): void {
    const userData = localStorage.getItem('user');
    if (!userData) return;

    const employeeLogin = JSON.parse(userData);

    this.employeesService.getEmployeeById(employeeLogin.id).subscribe({
      next: emp => {
        this.employee = emp;

        this.profileForm.patchValue({
          email: emp.email,
          phoneNumber: emp.phoneNumber,
          fireDate: emp.fireDate ? new Date(emp.fireDate) : null,
          password: ''
        });
      },
      error: err => console.error(err)
    });
  }

  toggleEdit(): void {
    this.updateErrorMessage = null;
    this.editing = true;
  }

  cancelEdit(): void {
    this.editing = false;
    this.updateErrorMessage = null;
    this.loadCurrentUser();
  }

  saveProfile(): void {
    if (this.profileForm.invalid || !this.employee) return;

    this.loading = true;
    this.updateErrorMessage = null;

    const { email, phoneNumber, fireDate, password } = this.profileForm.value;

    const payload: EmployeeUpdateRequestDTO = {
      email,
      password,
      phoneNumber
    };

    if (password && password.trim().length > 0) {
      payload.password = password;
    }

    this.employeesService.updateEmployee(this.employee.id, payload).subscribe({
      next: updatedEmployee => {
        this.employee = updatedEmployee;
        this.editing = false;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.updateErrorMessage = 'Failed to update profile. Please try again.';
        this.loading = false;
      }
    });
  }

  deleteProfile(): void {
    if (!confirm('Are you sure you want to delete your profile?')) return;

    this.employeesService.deleteEmployee(this.employee.id).subscribe({
      next: () => {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
      },
      error: err => console.error(err)
    });
  }
}
