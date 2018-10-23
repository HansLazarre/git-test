import {AbstractControl} from '@angular/forms';

export function ValidatePhone(control: AbstractControl): { [key: string]: boolean } | null {

  if (control.value !== null) {

    const raw = control.value.toString().replace(/[^\d]/g, '');

    if (raw.length !== 10 && raw.length !== 0) {
      return {phone: true};
    }
  }

  return null;
}
