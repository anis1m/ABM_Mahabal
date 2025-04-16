import { Routes } from '@angular/router';
import { HomepagecommonComponent } from './homepage/homepagecommon/homepagecommon.component';
import { DashboardcommonComponent } from './dashboard/dashboardcommon/dashboardcommon.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepagecommonComponent,
  },
  {
    path: 'dashboard',
    component: DashboardcommonComponent,
  },
];
