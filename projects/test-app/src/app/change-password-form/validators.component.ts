import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ChangePasswordValidators {
  static verifyOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "1234") resolve(null);
        else resolve({ oldPasswordIncorrect: true });
      }, 500);
    });
  }

  static checkPasswordMatching(control: AbstractControl): ValidationErrors | null {
    if (control.get("newPassword")?.value == control.get("confirmPassword")?.value) return null;
    else return { passwordsDontMatch: true };
  }
}
