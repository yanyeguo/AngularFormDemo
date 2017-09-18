import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
export function mobileValidator(control: FormControl): any {
    const myreg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    const valid = myreg.test(control.value);
    console.log('moblile的校验' + valid);
    return valid ? null : { mobile: true };
}
export function mobileAsyncValidator(control: FormControl): any {
    const myreg = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    const valid = myreg.test(control.value);
    console.log('moblile的校验' + valid);
    return Observable.of(valid ? null : { mobile: true }).delay(5000);
}
export function equalValidator(group: FormGroup): any {
    const password1: FormControl = group.get('passwords') as FormControl;
    const password2: FormControl = group.get('pawwwords2') as FormControl;
    // console.log(group);
    // console.log('--------------');
    // console.log((group.get('passwords') as FormControl));
    // console.log((group.get('passwords') as FormControl).value);
    let valid: boolean = false;
    if (password1 != null && password2 != null) {
        valid = (password1.value === password2.value);

    }
    console.log('密码较验：' + valid);


    // return valid ? null : { equal: true };
    return valid ? null : { equal: { descy: '密码不匹配' } };
}