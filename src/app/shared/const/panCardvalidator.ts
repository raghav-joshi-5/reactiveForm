import { AbstractControl, ValidationErrors } from '@angular/forms';

export class panCardvalidator {
  public static panCard(control: AbstractControl): ValidationErrors | null {
    let regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    let panNumber = control.value;
    if (!panNumber) {
      return null;
    }
    let isValid = regex.test(panNumber);
    if (isValid) {
      return null;
    } else {
      return {
        panError: `Enter Correct PAN number`,
      };
    }
  }
}
