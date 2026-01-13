import {Component, Input} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {NgForOf, NgIf} from "@angular/common";
import {StockAvailability} from '../location-view/models/stock-availability.model';

@Component({
  selector: 'app-stock-cards',
  imports: [
    MatCard,
    MatChipsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './stock-cards.component.html',
  styleUrl: './stock-cards.component.css'
})
export class StockCardsComponent {
  @Input() stockAvailabilities!: StockAvailability[];
}
