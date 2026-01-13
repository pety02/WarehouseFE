import {Component, OnInit} from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {NgIf} from '@angular/common';
import {AuthService} from '../login-form/login-form.service';
import {EmployeeLoginResponseDTO} from '../login-form/models/employee-login-response-dto.model';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-user-drop-down-button',
  standalone: true,
  imports: [
    MatDivider,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    NgIf,
    MatButton
  ],
  templateUrl: './user-drop-down-button.component.html',
  styleUrl: './user-drop-down-button.component.css'
})
export class UserDropDownButtonComponent implements OnInit {

  user: EmployeeLoginResponseDTO | null = null;

  constructor(protected authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }
}
