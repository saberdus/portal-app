import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './core/app.routing.module';
import {UserService} from './user/user.service';
import {AddUserComponent} from './user/add-user.component';
import {FindUserComponent} from "./user/find-user/find-user.component";
import {UpdateUserComponent} from "./user/update-user/update-user.component";
import {EditUserDialogComponent} from "./user/edit-user-dialog/edit-user-dialog.component";
import {RemoveUserDialogComponent} from "./user/remove-user-dialog/remove-user-dialog.component";
import {CustomMaterialModule} from "./core/material.module";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnlineShopComponent } from './online-shop/online-shop.component';
import {JwtInterceptor} from "./interceptor/jwt-interceptor";
import {OauthService} from "./services/oauth.service";
import { ConnectionErrorComponent } from './connection-error/connection-error.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    FindUserComponent,
    UpdateUserComponent,
    EditUserDialogComponent,
    RemoveUserDialogComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    OnlineShopComponent,
    ConnectionErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    CustomMaterialModule,
    MatIconModule
  ],
  providers: [UserService, OauthService, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [EditUserDialogComponent,
                    RemoveUserDialogComponent]
})
export class AppModule { }
