import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { User } from './models/user.model';
import { UserService } from './user.service';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {

  user: User = new User();
  submitted = false;

  constructor(private router: Router,
              private userService: UserService,
              private location: Location) {
  }

  onSubmit() { this.submitted = true; }

  createUser(): void {
    this.userService.createUser(this.user)
      .subscribe( payload => {
      });
  };

  goBack(): void {
    this.location.back();
  }
}
