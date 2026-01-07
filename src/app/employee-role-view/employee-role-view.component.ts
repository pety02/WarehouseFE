import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface EmployeeRole {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-employee-role-view',
  templateUrl: './employee-role-view.component.html',
  styleUrls: ['./employee-role-view.component.css']
})
export class EmployeeRoleViewComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource = new MatTableDataSource<EmployeeRole>([]);

  ngOnInit(): void {
    this.dataSource.data = [
      { id: '1', name: 'Admin', description: 'Administrator Role' }
    ];
  }
}
