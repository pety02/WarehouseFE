import { Component } from '@angular/core';
import {LoginFormComponent} from "../login-form/login-form.component";
import {NgClass, NgIf} from "@angular/common";
import {RegisterFormComponent} from "../registration-form/registration-form.component";
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-auth-tabs-view',
  imports: [
    LoginFormComponent,
    NgIf,
    RegisterFormComponent,
    NgClass,
    MatButton
  ],
  templateUrl: './auth-tabs-view.component.html',
  styleUrl: './auth-tabs-view.component.css'
})
export class AuthTabsViewComponent {
  showLogin = true;
}
