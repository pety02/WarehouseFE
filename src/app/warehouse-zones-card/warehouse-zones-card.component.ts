import {Component, Input} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {NgForOf, NgIf} from "@angular/common";
import {WarehouseZone} from '../location-view/models/warehouse-zone.model';

@Component({
  selector: 'app-warehouse-zones-card',
  standalone: true,
  imports: [
    MatCard,
    MatChipsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './warehouse-zones-card.component.html',
  styleUrl: './warehouse-zones-card.component.css'
})
export class WarehouseZonesCardComponent {
  @Input() warehouseZones!: WarehouseZone[];
}
