import { Component } from '@angular/core';
import {User} from "../user/models/user.model";
import {UserService} from "../user/user.service";
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = new User();
  email = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  lastname = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);

  //Only letters are allowed
  username = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{6,}')]);

  //Minimum eight characters
  password = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,}')]);

  registeredUser: User;

  constructor(private router: Router,
              private userService: UserService) {
  }

  registerUser(): void {
    this.userService.createUser(this.user)
      .subscribe( payload => {
        this.registeredUser = payload;

        this.router.navigate(["shop"]);
      });
  };

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getFirstNameErrorMessage() {
    return this.firstname.hasError('required') ? 'You must enter a value': 'Not a valid first name';
  }

  getLastNameErrorMessage() {
    return this.firstname.hasError('required') ? 'You must enter a value': 'Not a valid last name';
  }

  getUsernameErrorMessage() {
    return this.username.hasError('required') ? 'Username is REQUIRED': 'Not a valid username: at least 6 and maximum 10 letters are allowed';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'Password is REQUIRED': 'Not a valid password: minimum 8 and maximum 10 characters';
  }
}
