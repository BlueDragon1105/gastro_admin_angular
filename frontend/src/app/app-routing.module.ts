import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrderComponent} from './order/order.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './guard/auth.guard';


const routes: Routes = [
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
