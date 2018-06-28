import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from "@angular/material";
import { Location } from '@angular/common';

import { User } from './models/user.model';
import { UserService } from './user.service';
import {EditUserDialogComponent} from "./edit-user-dialog/edit-user-dialog.component";
import {RemoveUserDialogComponent} from "./remove-user-dialog/remove-user-dialog.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private router: Router,
              private userService: UserService,
              private dialog: MatDialog,
              private location: Location) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe( payload => {
        this.users = payload;
      });
  };

  removeUser(userToRemove: User): void {
    // this.userService.deleteUser(userId)
    //   .subscribe( payload => {
    //     alert("Deleted User with id: " + userId);
    //   });
    this.dialog.open(RemoveUserDialogComponent, {
      width: '600px',
      disableClose: true,
      autoFocus: true,
      data: userToRemove
    })
  };

  editUser(user: User): void {
    this.dialog.open(EditUserDialogComponent, {
      width: '600px',
      disableClose: true,
      autoFocus: true,
      data: user
    })
  };

  goBack(): void {
    this.location.back();
  }
}
