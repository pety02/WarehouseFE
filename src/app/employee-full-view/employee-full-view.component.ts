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
import EmployeesService from './employee.service';

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

  constructor(
    private employeesService: EmployeesService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadCurrentUser();
  }

  private initForm(): void {
    this.profileForm = this.fb.group({
      fireDate: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(0[0-9]{9}|\+359[0-9]{9})$/)]],
      role: ['', Validators.required],
      locationName: ['', Validators.required],
      locationAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required],
        country: ['', Validators.required],
      })
    });
  }

  private loadCurrentUser(): void {
    const userData = localStorage.getItem('user');
    if (!userData) return;

    const employeeLogin = JSON.parse(userData);
    this.employeesService.getEmployeeById(employeeLogin.id).subscribe({
      next: emp => {
        this.employee = emp;
        // patch all fields including nested locationAddress
        this.profileForm.patchValue({
          fireDate: emp.fireDate ? new Date(emp.fireDate) : null,
          email: emp.email,
          phoneNumber: emp.phoneNumber,
          role: emp.role,
          locationName: emp.locationName,
          locationAddress: {
            street: emp.locationAddress?.street || '',
            city: emp.locationAddress?.city || '',
            zip: emp.locationAddress?.zip || '',
            country: emp.locationAddress?.country || ''
          }
        });
      },
      error: err => console.error(err)
    });
  }

  toggleEdit() {
    this.editing = true;
  }

  cancelEdit() {
    this.editing = false;
    this.loadCurrentUser();
  }

  saveProfile() {
    if (this.profileForm.invalid) return;

    this.loading = true;

    const formValue = this.profileForm.value;

    // convert fireDate to ISO string if it's a Date
    const fireDateIso = formValue.fireDate instanceof Date
      ? formValue.fireDate.toISOString().split('T')[0]
      : formValue.fireDate;

    const payload = {
      ...formValue,
      fireDate: fireDateIso
    };

    this.employeesService.updateEmployee(this.employee.id, payload).subscribe({
      next: updatedEmployee => {
        this.employee = updatedEmployee;
        this.editing = false;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  deleteProfile() {
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
