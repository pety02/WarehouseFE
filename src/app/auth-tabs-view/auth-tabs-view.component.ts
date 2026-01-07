import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../registration-form/registration-form.component';
import { NgIf, NgClass } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-auth-tabs-view',
  standalone: true,
  imports: [
    LoginFormComponent,
    RegisterFormComponent,
    NgIf,
    NgClass,
    MatButtonModule  // fixed here
  ],
  templateUrl: './auth-tabs-view.component.html',
  styleUrls: ['./auth-tabs-view.component.css']  // fixed typo
})
export class AuthTabsViewComponent {
  showLogin = true;
}
