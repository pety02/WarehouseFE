import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import {AuthService} from './login-form.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  imports: [
    ReactiveFormsModule,
    NgIf,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class LoginFormComponent {
  loginForm: FormGroup;
  errorMessage: string = "";

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.errorMessage = ''; // clear previous errors
      this.authService.login(this.loginForm.value).subscribe({
        next: (user) => {
          console.log('Login successful', user);
          // Navigate to user-specific location page
          this.router.navigate(['/current-location', user.locationId]);
        },
        error: (err) => {
          console.error('Login failed:', err);

          if (err.status === 401) {
            this.errorMessage = 'Invalid email or password';
          } else if (err.status === 403) {
            this.errorMessage = 'Your account is inactive';
          } else {
            this.errorMessage = 'Server error, try again later';
          }
        }
      });
    } else {
      // Highlight all invalid fields
      this.loginForm.markAllAsTouched();
    }
  }
}
