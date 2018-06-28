import {Component, Input, OnChanges} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

import {User} from "../models/user.model";
import {UserService} from "../user.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnChanges {
  @Input() user: User;

  userForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService) {
    this.createForm();
  }

  public createForm() {
    this.userForm = this.fb.group({
      firstName: '',
      lastName:'',
      eMail:''
    });
  }

  public ngOnChanges() {
    this.rebuildForm();
  }

  private rebuildForm() {
    this.userForm.reset({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      eMail: this.user.email
    });
  }

  revert() { this.rebuildForm(); }

  onSubmit() {
    this.user = this.prepareSaveUser();
    this.userService.updateUser(this.user).subscribe(/* error handling */);
    this.rebuildForm();
  }

  private prepareSaveUser() {
    const formModel = this.userForm.value;

    // return new `User` object containing a combination of original user value(s)
    // and deep copies of changed form model values
    const saveUser: User = {
      userId: this.user.userId,
      firstName: formModel.firstName as string,
      lastName: formModel.lastName as string,
      email: formModel.eMail as string,
      username: this.user.username,
      password: this.user.password,
      role: "customer"
    };
    return saveUser;
  }
}
