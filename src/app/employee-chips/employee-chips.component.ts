import {Component, Input} from '@angular/core';
import {MatChipsModule} from "@angular/material/chips";
import {NgForOf} from "@angular/common";
import {MatTooltip} from '@angular/material/tooltip';
import {Employee} from '../location-view/models/employee.model';

@Component({
  selector: 'app-employee-chips',
  standalone: true,
  imports: [
    MatChipsModule,
    NgForOf,
    MatTooltip
  ],
  templateUrl: './employee-chips.component.html',
  styleUrl: './employee-chips.component.css'
})
export class EmployeeChipsComponent {
  @Input() employees!: Employee[];
}
