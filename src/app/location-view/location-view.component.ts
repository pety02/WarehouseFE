import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Employee} from './models/employee.model';
import {Item} from './models/item.model';
import {WarehouseZone} from './models/warehouse-zone.model';
import {StockAvailability} from './models/stock-availability.model';
import {
  MatCard, MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {Location} from './models/location.model'
import {NgForOf, NgIf} from '@angular/common';
import {LocationService} from './location.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatChip} from '@angular/material/chips';
import {MatTooltip} from '@angular/material/tooltip';
import {AuthService} from '../login-form/login-form.service';

@Component({
  selector: 'app-location-view',
  standalone: true,
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css'],
  imports: [
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    NgForOf,
    NgIf,
    MatCard,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardHeader,
    MatCardAvatar,
    MatGridList,
    MatGridTile,
    MatChip,
    MatTooltip
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
    private locationService: LocationService,
    protected authService: AuthService
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
