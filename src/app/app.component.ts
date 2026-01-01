import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {NgClass, NgIf} from '@angular/common';
import {RegistrationFormComponent} from './registration-form/registration-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginFormComponent, RegistrationFormComponent, NgIf, RegistrationFormComponent, RegistrationFormComponent, RegistrationFormComponent, RegistrationFormComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WarehouseFE';
  showLogin = true;
}
