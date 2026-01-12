import { Component, OnInit } from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';

interface EmployeeFull {
  employeeId: string;
  fullName: string;
  email: string;
  roleName: string;
  isActive: boolean;
}

@Component({
  selector: 'app-employee-full-view',
  standalone: true,
  templateUrl: './employee-full-view.component.html',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef
  ],
  styleUrls: ['./employee-full-view.component.css']
})
export class EmployeeFullViewComponent implements OnInit {

  displayedColumns: string[] = ['employeeId', 'fullName', 'email', 'roleName', 'isActive'];
  dataSource = new MatTableDataSource<EmployeeFull>([]);

  constructor() { }

  ngOnInit(): void {
    // TODO: fetch from service
    this.dataSource.data = [
      { employeeId: '1', fullName: 'John Doe', email: 'john@mail.com', roleName: 'Admin', isActive: true }
    ];
  }
}
