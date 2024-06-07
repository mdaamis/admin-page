import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './dashboard/sales/sales.component';
import { PurchaseComponent } from './dashboard/purchase/purchase.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';
import { ProductComponent } from './dashboard/product/product.component';
import { UsersComponent } from './dashboard/users/users.component';
import { SatisticsComponent } from './dashboard/satistics/satistics.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavComponent,
    DashboardComponent,
    SalesComponent,
    PurchaseComponent,
    InventoryComponent,
    ProductComponent,
    UsersComponent,
    SatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
