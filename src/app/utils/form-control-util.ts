import {AbstractControl} from '@angular/forms';

export default class FormControlUtil {

  public static formatPhone(field: AbstractControl) {

    const fromPhone = field.value;

    const toPhone = fromPhone.replace(/[^\d]/g, '');

    const value1 = toPhone.substr(0, 3);

    const value2 = toPhone.substr(3, 3);

    const value3 = toPhone.substr(6, 4);

    field.setValue(value1 + (value2 ? ' ' + value2 : '') + (value3 ? '-' + value3 : ''));
  }

  public static formatLowerCase(field: AbstractControl) {

    const from = field.value.toString();

    field.setValue(from.toLowerCase());
  }

  public static formatUpperCase(field: AbstractControl) {

    const from = field.value.toString();

    field.setValue(from.toUpperCase());
  }
}
