import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {Location} from '../location-view/models/location.model';
import {LowStockAlertService} from '../location-view/low-stock-alert.service';
import {LowStockAlertDTO} from '../location-view/models/LowStockAlertDTO.model';
import {LowStockAlertCardComponent} from '../low-stock-alert-card/low-stock-alert-card.component';
import {NgIf} from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-location-card',
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    LowStockAlertCardComponent,
    NgIf,
  ],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.css'
})
export class LocationCardComponent {
  lowStockAlert: LowStockAlertDTO | null = null;
  @Input() location!: Location;
  errorMessage: string | null = null;
  loading = false;

  constructor(private lowStockAlertService: LowStockAlertService
  ) {}

  predictLowStocks(): void {
    this.loading = true;
    this.errorMessage = null;

    this.lowStockAlertService.predict().subscribe({
      next: alert => {
        this.lowStockAlert = alert;
        this.loading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.lowStockAlert = null;
        this.loading = false;

        this.errorMessage =
          error.error?.message ??
          error.error?.error ??
          'Failed to predict low stock alerts.';
      }
    });
  }
}
