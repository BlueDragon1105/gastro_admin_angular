import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { OrderComponent } from './order/order.component';
import {JwtInterceptor} from './helper';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

// service
import {AuthService} from './services/auth.service';

// component

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    HttpClientModule,
    HttpClient,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
