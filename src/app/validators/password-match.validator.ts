import { AbstractControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PasswordMatchValidator extends Validators {
    static passwordMarch(control: AbstractControl): void {

        const password: string = control.get('password')?.value;
        const confirmPassword: string = control.get('confirmPassword')?.value;
        if (password !== confirmPassword) {
            control.get('confirmPassword')?.setErrors({ NoPasswordMatch: true });
        }

    }
}