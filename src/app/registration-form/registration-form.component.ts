import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {RegistrationService} from './registration-form.service';
import {EmployeeCreateRequestDTO} from './models/employee-create-request-dto.model';
import {EmployeeResponseDTO} from './models/employee-register-response-dto.model';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css',
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  loading = false;
  error: string | null = null;
  registered = false; // <- toggle to show login form after successful registration

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: ['', Validators.required],
      uidNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  onSubmit() {
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const employee: EmployeeCreateRequestDTO = this.registerForm.value;

    this.registrationService.registerEmployee(employee).subscribe({
      next: (res: EmployeeResponseDTO) => {
        console.log('Employee registered:', res);
        this.registerForm.reset(); // <- reset form fields
        this.registered = true; // <- show login form
        this.loading = false;
      },
      error: (err: any) => {
        console.error(err);
        this.error = err?.error?.message || 'Registration failed';
        this.loading = false;
      }
    });
  }
}
