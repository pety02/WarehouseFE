import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Employee} from './models/employee.model';
import {Item} from './models/item.model';
import {WarehouseZone} from './models/warehouse-zone.model';
import {StockAvailability} from './models/stock-availability.model';
import {MatCardContent, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {Location} from './models/location.model'
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatList, MatListItem} from '@angular/material/list';
import {NgForOf, NgIf} from '@angular/common';
import {LocationService} from './location.service';

@Component({
  selector: 'app-location-view',
  standalone: true,
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css'],
  imports: [
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatList,
    MatListItem,
    NgForOf,
    NgIf
  ],
})
export class LocationViewComponent implements OnInit {
  locationId!: string;
  location!: Location;
  employees: Employee[] = [];
  items: Item[] = [];
  warehouseZones: WarehouseZone[] = [];
  stockAvailabilities: StockAvailability[] = [];

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.locationId = this.route.snapshot.paramMap.get('id')!;
    this.fetchLocationDetails();
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id); // now you can call backend with this id
  }

  fetchLocationDetails() {
    this.locationService.getLocationById(this.locationId).subscribe(loc => this.location = loc);
    this.locationService.getEmployeesByLocation(this.locationId).subscribe(emp => this.employees = emp);
    this.locationService.getItemsByLocation(this.locationId).subscribe(it => this.items = it);
    this.locationService.getWarehouseZonesByLocation(this.locationId).subscribe(zones => this.warehouseZones = zones);
    this.locationService.getStockAvailabilitiesByLocation(this.locationId).subscribe(stock => this.stockAvailabilities = stock);
  }
}
