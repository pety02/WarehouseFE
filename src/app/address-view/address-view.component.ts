import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-address-view',
  standalone: true,
  templateUrl: './address-view.component.html',
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
