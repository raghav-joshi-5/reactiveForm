import { AbstractControl, ValidationErrors } from '@angular/forms';

export class empIdvalidator {
  public static isempIdValid(
    control: AbstractControl
  ): ValidationErrors | null {
    let empIdVal: string = control.value;
    let regex = /^[A-Z]\d{3}$/;
    if (!empIdVal) {
      return null;
    }
    let isValid = regex.test(empIdVal);
    if (isValid) {
      return null;
    } else {
      return { empIderror: `enter valid emp id (E123)` };
    }
  }
}
