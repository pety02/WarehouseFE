import {Component, Input} from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatChip, MatChipsModule} from "@angular/material/chips";
import {MatGridListModule} from "@angular/material/grid-list";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";
import {Item} from './models/item.model';

@Component({
  selector: 'app-item-stocks',
  standalone: true,
  imports: [
    MatCard,
    MatChip,
    NgForOf,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardModule,
    CurrencyPipe,
    MatGridListModule,
    MatChipsModule,
    DatePipe
  ],
  templateUrl: './item-stocks.component.html',
  styleUrl: './item-stocks.component.css'
})
export class ItemStocksComponent {
    @Input() items!: Item[];
}
