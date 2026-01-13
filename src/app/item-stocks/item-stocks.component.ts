import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatChip} from "@angular/material/chips";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {NgForOf} from "@angular/common";
import {StockAvailability} from '../location-view/models/stock-availability.model';

@Component({
  selector: 'app-item-stocks',
    imports: [
        MatCard,
        MatChip,
        MatGridList,
        MatGridTile,
        NgForOf
    ],
  templateUrl: './item-stocks.component.html',
  styleUrl: './item-stocks.component.css'
})
export class ItemStocksComponent {
    stockAvailabilities: StockAvailability[] = [];
}
