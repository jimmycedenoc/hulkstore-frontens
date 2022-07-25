import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class MessagesValidator {
    static validFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(key => {
            let control: any = formGroup.controls[key];
            control.get('messageError').value = control.invalid ? this.getMessagesError(control.errors) : '';
        });
        console.log(formGroup.controls);
    }

    private static getMessagesError(error: ValidationErrors): string {
        let message = '';
        message += this.validRequired(error);
        message += this.validMinLength(error);
        message += this.validMaxLength(error);
        message += this.validPasswordMatch(error);
        message += this.validEmail(error);
        return message;
    }

    private static validRequired(error: ValidationErrors): string {
        return error['required'] ? 'Campo requerido.' : '';
    }

    private static validMinLength(error: ValidationErrors): string {
        return error['minlength'] ? `M\u00ednimo de caracteres es de ${error['minlength'].requiredLength}.` : '';
    }
    private static validMaxLength(error: ValidationErrors): string {
        return error['maxlength'] ? `M\u00e1ximo de caracteres es de ${error['maxlength'].requiredLength}.` : '';
    }

    private static validPasswordMatch(error: ValidationErrors): string {
        return error['NoPasswordMatch'] ? `Contrase\u00f1as no coinciden.` : '';
    }

    private static validEmail(error: ValidationErrors): string {
        return error['email'] ? `Correo no v\u00e1lido.` : '';
    }
}
