import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {NgIf} from '@angular/common';
import {RegistrationFormComponent} from './registration-form/registration-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginFormComponent, RegistrationFormComponent, NgIf, RegistrationFormComponent, RegistrationFormComponent, RegistrationFormComponent, RegistrationFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WarehouseFE';
  showLogin = true;
}
