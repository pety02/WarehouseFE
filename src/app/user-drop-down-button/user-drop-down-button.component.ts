import { Component, NgIterable, OnInit } from '@angular/core';
import { MatDivider } from "@angular/material/divider";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { AuthService } from '../login-form/login-form.service';
import { EmployeeLoginResponseDTO } from '../login-form/models/employee-login-response-dto.model';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { LocationSelectDialogComponent } from '../location-select-dialog/location-select-dialog.component';
import { Location } from '../location-view/models/location.model';
import { MatDialog } from '@angular/material/dialog';
import { LocationService } from '../location-view/location.service';

@Component({
  selector: 'app-user-drop-down-button',
  standalone: true,
  imports: [
    MatDivider,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatButton
  ],
  templateUrl: './user-drop-down-button.component.html',
  styleUrls: ['./user-drop-down-button.component.css']
})
export class UserDropDownButtonComponent implements OnInit {

  user: EmployeeLoginResponseDTO | null = null;
  allLocations: Location[] = []; // fix: store fetched locations here

  constructor(
    protected authService: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();

    // fetch all locations on init
    this.locationService.getAllLocations().subscribe({
      next: locs => this.allLocations = locs,
      error: err => console.error('Failed to fetch locations', err)
    });
  }

  protected openMyProfile() {
    this.router.navigate(["/profile"]);
  }

  openLocationDialog() {
    const dialogRef = this.dialog.open(LocationSelectDialogComponent, {
      width: '400px',
      data: { allLocations: this.allLocations } // now this is populated
    });

    dialogRef.afterClosed().subscribe((selectedLocation?: Location) => {
      if (selectedLocation) {
        this.changeLocation(selectedLocation);
      }
    });
  }

  changeLocation(loc: Location) {
    console.log('Location selected:', loc);
    localStorage.setItem("locationId", loc.id);
  }
}
