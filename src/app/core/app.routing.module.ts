import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { AddUserComponent } from '../user/add-user.component';
import { FindUserComponent } from "../user/find-user/find-user.component";
import { UpdateUserComponent } from "../user/update-user/update-user.component";
import { LoginComponent } from "../login/login.component";
import {RegisterComponent} from "../register/register.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {OnlineShopComponent} from "../online-shop/online-shop.component";
import {ConnectionErrorComponent} from "../connection-error/connection-error.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'find', component: FindUserComponent},
  { path: 'update', component: UpdateUserComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent},
  {path: 'shop', component: OnlineShopComponent},
  {path: 'error', component: ConnectionErrorComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
