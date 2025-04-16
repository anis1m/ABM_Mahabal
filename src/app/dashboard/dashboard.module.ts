import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardcommonComponent } from './dashboardcommon/dashboardcommon.component';
import { ActionsComponent } from './actions/actions.component';
import { ProjectsComponent } from './projects/projects.component';
import { IssuesComponent } from './issues/issues.component';

import { RouterModule } from '@angular/router';
import { ProjectsAddModule } from './projects/add/add.module';
import { IssuesAddModule } from './issues/add/add.module';
import { UpdatesComponent } from './updates/updates.component';
import { UsersAddModule } from './users/add/add.module';

@NgModule({
  declarations: [
    NavbarComponent,
    DashboardcommonComponent,
    ActionsComponent,
    ProjectsComponent,
    IssuesComponent,
    UpdatesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProjectsAddModule,
    IssuesAddModule,
    UsersAddModule,
  ],
  exports: [DashboardcommonComponent],
})
export class DashboardModule {}
