import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {UserService} from "../user.service";
import {User} from "../models/user.model";


@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.scss']
})
export class FindUserComponent {
  searchedUser: User;
  findUserForm: FormGroup;
  eMail: string;
  submitted = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private location: Location) {
    this.createForm();
  }

  public createForm() {
    this.findUserForm = this.fb.group({
      eMail: ['', Validators.required ],
    });
  }

  onSubmit() { this.submitted = true; }

  findUser(): void {
    this.userService.findUser(this.eMail)
      .subscribe(payload => {
//        alert("Found user with eMail address: " + this.eMail);
        this.searchedUser = payload
      });
  }

  goBack(): void {
    this.location.back();
  }
}
