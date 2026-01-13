import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Employee} from './models/employee.model';
import {Item} from './models/item.model';
import {WarehouseZone} from './models/warehouse-zone.model';
import {StockAvailability} from './models/stock-availability.model';
import {Location} from './models/location.model'
import {NgIf} from '@angular/common';
import {LocationService} from './location.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {AuthService} from '../login-form/login-form.service';
import {NavigationBarComponent} from '../navigation-bar/navigation-bar.component';
import {WarehouseZonesCardComponent} from '../warehouse-zones-card/warehouse-zones-card.component';
import {EmployeeChipsComponent} from '../employee-chips/employee-chips.component';
import {StockCardsComponent} from '../stock-cards/stock-cards.component';
import {LocationCardComponent} from '../location-card/location-card.component';

@Component({
  selector: 'app-location-view',
  standalone: true,
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css'],
  imports: [
    NgIf,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NavigationBarComponent,
    WarehouseZonesCardComponent,
    EmployeeChipsComponent,
    StockCardsComponent,
    LocationCardComponent,
  ],
})
export class LocationViewComponent implements OnInit {
  locationId!: string;
  location!: Location;
  employees: Employee[] = [];
  items: Item[] = [];
  warehouseZones: WarehouseZone[] = [];
  stockAvailabilities: StockAvailability[] = [];
  user: string | undefined = "";

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService,
    protected authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.locationId = this.route.snapshot.paramMap.get('id')!;
    this.fetchLocationDetails();
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.user = this.authService.getUser()?.fullName ?? '';

  }

  fetchLocationDetails() {
    this.locationService.getLocationById(this.locationId).subscribe(loc => this.location = loc);
    this.locationService.getEmployeesByLocation(this.locationId).subscribe(emp => this.employees = emp);
    //this.locationService.getItemsByLocation(this.locationId).subscribe(it => this.items = it);
    this.locationService.getWarehouseZonesByLocation(this.locationId).subscribe(zones => this.warehouseZones = zones);
    this.locationService.getStockAvailabilitiesByLocation(this.locationId).subscribe(stock => this.stockAvailabilities = stock);
  }
}
