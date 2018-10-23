import {AbstractControl} from '@angular/forms';

export const rsFieldClass = (field: AbstractControl) => {

  const valid = (_field) => {
    return _field && !_field.valid && _field.touched;
  };

  return {
    'rs-error': valid(field),
    //'rs-required': true // todo check the form control
  };
};
