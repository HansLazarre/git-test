import {AbstractControl} from '@angular/forms';

export function ValidatePostalCode(control: AbstractControl): { [key: string]: boolean } | null {

  if (control.value !== null) {

    const postalCode = control.value.toString().trim();

    const us = new RegExp('^\\d{5}(-{0,1}\\d{4})?$');
    const ca = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i);

    if (!us.test(postalCode.toString()) && !ca.test(postalCode.toString().replace(/\W+/g, ''))) {
      return {postalCode: true};
    }
  }

  return null;
}
