import {Routes} from '@angular/router';
import {AuthTabsViewComponent} from './auth-tabs-view/auth-tabs-view.component';
import {LocationViewComponent} from './location-view/location-view.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {AllItemsViewComponent} from './all-items-view/all-items-view.component';
import {EmployeeFullViewComponent} from './employee-full-view/employee-full-view.component';
import {AllTransfersViewComponent} from './all-transfers-view/all-transfers-view.component';

export const routes: Routes = [
  { path: '', component: AuthTabsViewComponent},
  { path: 'login', component: AuthTabsViewComponent },
  { path: 'overview', component: LocationViewComponent},
  { path: 'item-stocks', component: AllItemsViewComponent },
  { path: 'profile', component: EmployeeFullViewComponent },
  { path: 'transfers', component: AllTransfersViewComponent },
];

/*

import { Routes } from '@angular/router';
import { AuthTabsViewComponent } from './auth-tabs-view/auth-tabs-view.component';
import { LocationViewComponent } from './location-view/location-view.component';
import { OverviewComponent } from './overview/overview.component';
import { StocksComponent } from './stocks/stocks.component';
import { LocationsMapComponent } from './locations-map/locations-map.component';
import { EmployeesDashboardComponent } from './employees-dashboard/employees-dashboard.component';
import { StockAlertsComponent } from './stock-alerts/stock-alerts.component';
import { EventLogComponent } from './event-log/event-log.component';
import { ProfileComponent } from './profile/profile.component';
import { InternalTransfersComponent } from './internal-transfers/internal-transfers.component';

// Optional: you can create an AdminGuard later to protect admin routes
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', component: AuthTabsViewComponent },

  // Warehouse views
  { path: 'current-location/:id', component: LocationViewComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'locations-map', component: LocationsMapComponent },
  { path: 'event-log', component: EventLogComponent },
  { path: 'internal-transfers', component: InternalTransfersComponent },
  { path: 'profile', component: ProfileComponent },

  // Admin-only views
  { path: 'employees', component: EmployeesDashboardComponent, canActivate: [AdminGuard] },
  { path: 'stock-alerts', component: StockAlertsComponent, canActivate: [AdminGuard] },

  // Fallback route
  { path: '**', redirectTo: '' }
];


*/
