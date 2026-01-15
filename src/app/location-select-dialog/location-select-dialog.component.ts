import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '../location-view/models/location.model';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NgForOf, NgIf } from '@angular/common';
import { LocationService } from '../location-view/location.service';

export interface LocationDialogData {
  allLocations?: Location[]; // optional in case parent passes locations
}

@Component({
  selector: 'app-location-select-dialog',
  standalone: true,
  templateUrl: './location-select-dialog.component.html',
  styleUrls: ['./location-select-dialog.component.css'],
  imports: [MatSelectModule, MatButtonModule, NgForOf, MatDialogTitle, MatDialogContent, MatDialogActions]
})
export class LocationSelectDialogComponent implements OnInit {
  selectedLocationId?: string;
  allLocations: Location[] = []; // stores locations for the select

  constructor(
    private dialogRef: MatDialogRef<LocationSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LocationDialogData,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    // Use locations passed from parent if available
    if (this.data?.allLocations?.length) {
      this.allLocations = this.data.allLocations;
    } else {
      // Otherwise fetch from service
      this.locationService.getAllLocations().subscribe({
        next: locs => (this.allLocations = locs),
        error: err => console.error('Failed to fetch locations', err)
      });
    }
  }

  /** Called when user clicks "Go" */
  confirm() {
    const selectedLocation = this.allLocations.find(
      loc => loc.id === this.selectedLocationId
    );
    if (selectedLocation) {
      this.dialogRef.close(selectedLocation); // return selected location
    }
  }

  /** Called when user clicks "Cancel" */
  cancel() {
    this.dialogRef.close(); // close without selection
  }
}
