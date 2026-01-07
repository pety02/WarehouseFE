import {Routes} from '@angular/router';
import {AuthTabsViewComponent} from './auth-tabs-view/auth-tabs-view.component';
import {LocationViewComponent} from './location-view/location-view.component';

export const routes: Routes = [
  { path: '', component: AuthTabsViewComponent},
  { path: 'current-location/:id', component: LocationViewComponent }
];
