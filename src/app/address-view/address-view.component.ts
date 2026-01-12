import { Component, OnInit } from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';

@Component({
  selector: 'app-address-view',
  standalone: true,
  templateUrl: './address-view.component.html',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef
  ],
  styleUrls: ['./address-view.component.css']
})
export class AddressViewComponent implements OnInit {
  displayedColumns: string[] = ['city', 'country', 'street', 'no', 'zip'];
  dataSource = new MatTableDataSource<Address>([]);

  ngOnInit(): void {
    this.dataSource.data = [
      { city: 'Sofia', country: 'Bulgaria', street: 'Main St', no: '1', zip: '1000' }
    ];
  }
}
