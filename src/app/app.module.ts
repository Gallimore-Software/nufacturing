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
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InfoModule } from './pages/sales/components/quotes/info/info.module';
import { IngredientsModule } from './pages/sales/components/quotes/ingredients/ingredients.module';
import { SalesModule } from './pages/sales/sales.module';
import { ContainerComponent } from './components/container/container.component';
import { LoginComponent } from './pages/users/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RegisterComponent } from './pages/users/signup/register.component';
import { MatSelectModule } from '@angular/material/select';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ProductionModule } from './pages/production/production.module';
import { QualityModule } from './pages/quality/quality.module';
import { HumanResourcesModule } from './pages/human-resources/human-resources.module';
import { LogoutComponent } from './pages/logout/logout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LogoutDialogComponent } from './pages/logout/logout-dialog/logout-dialog.component';
import { GraphQLModule } from './graphql.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HasuraInterceptor } from './components/auth/hasura.interceptor';
import { AuthService } from './components/auth/auth.service';
import { AuthGuard } from './components/auth/auth.guard';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AuthInterceptor } from './components/auth/auth.interceptor';
import { ProductDevelopmentModule } from './pages/product-development/product-development.module';

// Import the new SyncStatus components and services
import { SyncStatusComponent } from './components/sync-status/sync-status.component';
import { SyncStatusService } from './components/sync-status/sync-status.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ContainerComponent,
    LoginComponent,
    CarouselComponent,
    RegisterComponent,
    LogoutComponent,
    LogoutDialogComponent,
    // Add SyncStatusComponent
    SyncStatusComponent,
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
    MatTableModule, // Already imported for displaying the sync status
    ReactiveFormsModule,
    MatInputModule,
    IngredientsModule,
    SalesModule,
    InfoModule,
    MatCardModule,
    MatSelectModule,
    MatPseudoCheckboxModule,
    MatDialogModule,
    ProductDevelopmentModule,
    ProductionModule,
    DashboardModule,
    QualityModule,
    HumanResourcesModule,
    GraphQLModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    SyncStatusService, // Add SyncStatusService here
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HasuraInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
