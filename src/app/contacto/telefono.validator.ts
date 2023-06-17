import { AbstractControl, ValidatorFn } from '@angular/forms';

export function telefonoValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const telefono = control.value;
    const telefonoValido = /^\d{10,}$/.test(telefono);

    return telefonoValido ? null : { telefonoInvalido: true };
  };
}