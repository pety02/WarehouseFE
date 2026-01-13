import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {LowStockAlertDTO} from '../location-view/models/LowStockAlertDTO.model';
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';
import {MatList, MatListItem} from '@angular/material/list';
import {MatChip, MatChipListbox} from '@angular/material/chips';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-low-stock-alert-card',
  standalone: true,
  templateUrl: './low-stock-alert-card.component.html',
  styleUrls: ['./low-stock-alert-card.component.css'],
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatDivider,
    MatCardContent,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatList,
    MatListItem,
    MatChipListbox,
    MatChip,
    MatCardFooter,
    NgIf,
    NgForOf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LowStockAlertCardComponent {
  @Input({ required: true }) alert!: LowStockAlertDTO;
}
