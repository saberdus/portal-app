import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ErrorStateMatcher} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";

import {UserService} from "../user/user.service";
import {User} from "../user/models/user.model";
import {OauthService} from "../services/oauth.service";



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{6,}')]);
  password = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,}')]);
  matcher = new MyErrorStateMatcher();
  showErrorMessage = false;
  loggedUser: User;
  userRole: string;

  constructor(private _router: Router,
              private _userService: UserService,
              private authenticationService: OauthService) {
  }

  // loginUser(): void {
  //   this._userService.validateUserCredentials(this.username.value, this.password.value)
  //   .subscribe(payload => {
  //     this.loggedUser = payload;
  //
  //     if (this.loggedUser != null) {
  //       this.userRole = this.loggedUser.role;
  //
  //       switch (this.userRole) {
  //         case "admin": {
  //           this._router.navigate(["dashboard"]);
  //           break;
  //         }
  //         case "customer": {
  //           this._router.navigate(["shop"]);
  //           break;
  //         }
  //       }
  //     } else {
  //       alert('username or password is wrong');
  //       this.username.reset();
  //       this.password.reset();
  //     }
  //   }
  //   );
  // }

  loginUser() {
    this.authenticationService.obtainAccessToken(this.username.value, this.password.value)
      .subscribe(
        accessToken => {
        }
      );
  }


  getUsernameErrorMessage() {
    return this.username.hasError('required') ? 'Username is REQUIRED': 'Not a valid username: at least 6 and maximum 10 letters are allowed';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'Password is REQUIRED': 'Not a valid password: minimum 8 and maximum 10 characters';
  }
}
