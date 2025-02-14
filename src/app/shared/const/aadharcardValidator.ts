import { AbstractControl, ValidationErrors } from '@angular/forms';

export class aadharcardValidaor {
  public static aadharNumber(
    control: AbstractControl
  ): ValidationErrors | null {
    let regex = /^\d{4}\s?\d{4}\s?\d{4}$/;
    let aadharNumber = control.value;
    if (!aadharNumber) {
      return null;
    }
    let isvalidaadhar = regex.test(aadharNumber);
    if (isvalidaadhar) {
      return null;
    } else {
      return {
        aadharNumberError: `Enter Correct aadhar Number`,
      };
    }
  }
}
// let regex = /^\d{4}\s?\d{4}\s?\d{4}$|^\d{12}$/;
