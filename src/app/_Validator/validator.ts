import { AbstractControl, ValidatorFn } from "@angular/forms";

/** Custom Name Validation */
export function ForbiddenNameValidator(forbiddenName: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const forbiden = forbiddenName.test(control.value);
        return forbiden ? { 'forbiddenName': { value: control.value } } : null
    }
}


/** Password Match Or Nor Validation */
export function PasswordValidator(control: AbstractControl): { [Key: string]: boolean } | null {
    const password = control.get('password');
    const confirmpassword = control.get('ConfirmPassword');
    if (password?.pristine || confirmpassword?.pristine) {
        return null
    }
    return password && confirmpassword && password.value != confirmpassword.value ?
        { "MissMatch": true } :
        null;
}