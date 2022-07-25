import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import Validation from 'src/app/validators/validation';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
        confirmPassword: new FormControl('')
    });
    submitted = false;

    constructor(private formBuilder: FormBuilder,
        readonly loginService: LoginService,
        readonly messageService: ToastrService) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group(
            {
                username: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(5),
                        Validators.maxLength(20),
                    ],
                ],
                password: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(5),
                        Validators.maxLength(40),
                    ],
                ],
                confirmPassword: ['', Validators.required]
            },
            {
                validators: [Validation.match('password', 'confirmPassword')],
            }
        );
    }

    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
    }

    async onSubmit(): Promise<void> {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        await this.loginService.singup(this.form.value);
        this.messageService.success('Usuario creado correctamente.');
        this.onReset();
    }

    onReset(): void {
        this.submitted = false;
        this.form.reset();
    }
}
