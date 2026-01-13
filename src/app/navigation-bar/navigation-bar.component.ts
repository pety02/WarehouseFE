import {Component, NgIterable, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatMenu, MatMenuItem} from "@angular/material/menu";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {Location} from '../location-view/models/location.model';
import {AuthService} from '../login-form/login-form.service';
import {UserDropDownButtonComponent} from '../user-drop-down-button/user-drop-down-button.component';
import {filter} from 'rxjs';
import {MatTooltip} from '@angular/material/tooltip';
import {MatChip} from "@angular/material/chips";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    MatButton,
    MatMenu,
    MatMenuItem,
    NgForOf,
    RouterLink,
    NgIf,
    UserDropDownButtonComponent,
    NgClass,
    MatChip,
    MatTooltip,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent implements OnInit {
  protected allLocations: (NgIterable<Location>) | undefined | null;
  currentUrl: string = "";

  constructor(protected authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Set initial URL for reload
    this.currentUrl = this.router.url;

    // Track URL changes for navigation after login
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentUrl = event.urlAfterRedirects;
    });
  }

  changeLocation(loc: Location) {

  }

  isOverviewActive(): boolean {
    return this.currentUrl.startsWith('/current-location') || this.currentUrl === '/login';
  }

  // TODO: do the same for other navigation-buttons and their paths
}
