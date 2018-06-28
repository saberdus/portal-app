import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {User} from "../models/user.model";

import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-remove-user-dialog',
  templateUrl: './remove-user-dialog.component.html',
  styleUrls: ['./remove-user-dialog.component.scss']
})
export class RemoveUserDialogComponent implements OnInit {

  userToRemove: User;
  // email = new FormControl('', [Validators.required, Validators.email]);
  // firstname = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  // lastname = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<RemoveUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: User
  ) {}

  ngOnInit() {
    this.userToRemove = this.data;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    alert("Deleted User with id: " + this.userToRemove.userId);
    this.userService.deleteUser(this.userToRemove.userId).subscribe(/* error handling */);

    this.closeDialog();
  }

  removeUser() {
    alert("Deleted User with id: " + this.userToRemove.userId);
    this.userService.deleteUser(this.userToRemove.userId).subscribe(/* error handling */);

    this.closeDialog();
  }
}
