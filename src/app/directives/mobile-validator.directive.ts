import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { mobileValidator } from '../vlidator/validators';


@Directive({
  selector: '[appMobileValidator]',
  providers: [{ provide: NG_VALIDATORS, useValue: mobileValidator, multi: true }]
})
export class MobileValidatorDirective {

  constructor() { }

}
