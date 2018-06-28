import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {User} from "../models/user.model";
import {UserService} from "../user.service";
import {FormControl, Validators} from "@angular/forms";



@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss']
})
export class EditUserDialogComponent implements OnInit {

  currentUser: User;
  email = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
  lastname = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]);

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: User
  ) {}

  ngOnInit() {
    this.currentUser = this.data;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.userService.updateUser(this.currentUser).subscribe(/* error handling */);

    this.closeDialog();
  }

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
}
