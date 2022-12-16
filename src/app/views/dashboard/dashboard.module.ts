import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DataTablesModule } from "angular-datatables";
import { CardModule, FormModule, GridModule } from '@coreui/angular';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DataTablesModule,
    CardModule,
    GridModule,
    FormModule
  ]
})
export class DashboardModule { }
