import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ChangePasswordValidators } from "./validators.component";

@Component({
  selector: "change-password-form",
  templateUrl: "./change-password-form.component.html",
  styleUrls: ["./change-password-form.component.css"],
})
export class ChangePasswordFormComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group(
      {
        oldPassword: ["", Validators.required, ChangePasswordValidators.verifyOldPassword],
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.required],
      },
      {
        validators: ChangePasswordValidators.checkPasswordMatching,
      }
    );
  }

  get oldPassword() {
    return this.form.get("oldPassword");
  }

  get newPassword() {
    return this.form.get("newPassword");
  }

  get confirmPassword() {
    return this.form.get("confirmPassword");
  }
}
