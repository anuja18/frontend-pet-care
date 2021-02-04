import { Directive, Input } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn
} from "@angular/forms";

export function specialCharValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Directive({
  selector: "[specialCharValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SpecialCharacterValidatorDirective,
      multi: true
    }
  ]
})

export class SpecialCharacterValidatorDirective implements Validator {
  @Input("specialCharValidator")
    forbiddenName!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName ? specialCharValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
  }
}


