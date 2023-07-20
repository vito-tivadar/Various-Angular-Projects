import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, CanActivate } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalErrorHandler } from './common/errors/GlobalErrorHandler';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './common/services/auth.service';
import { OrdersService } from './common/services/orders.service';
import { AuthGuard } from './common/services/auth-guard.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, LogoutComponent, AdminComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [
    AuthGuard,
    AuthService,
    OrdersService,
    HttpClient,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
