import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IngredientsModule } from './pages/sales/pages/quotes/ingredients/ingredients.module';
import { InfoModule } from './pages/sales/pages/quotes/info/info.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { SalesModule } from './pages/sales/sales.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    IngredientsModule,
    SalesModule,
    InfoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
