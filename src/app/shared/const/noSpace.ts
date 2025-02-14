import { AbstractControl, ValidationErrors } from '@angular/forms';

export class NoSpaceValidator {
  public static noSpace(control: AbstractControl): ValidationErrors | null {
    let val: string = control.value;
    if (!val) {
      return null;
    }

    if (val.includes(' ')) {
      return {
        noSpaceBar: `space bar is not allowed`,
      };
    } else {
      return null;
    }
  }
}
