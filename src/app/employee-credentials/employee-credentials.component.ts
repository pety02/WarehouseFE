import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface EmployeeCredentials {
  id: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-employee-credentials-view',
  standalone: true,
  templateUrl: './employee-credentials-view.component.html',
  styleUrls: ['./employee-credentials-view.component.css']
})
export class EmployeeCredentialsViewComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'password'];
  dataSource = new MatTableDataSource<EmployeeCredentials>([]);

  ngOnInit(): void {
    this.dataSource.data = [
      { id: '1', email: 'test@mail.com', password: 'pwd123' }
    ];
  }
}
