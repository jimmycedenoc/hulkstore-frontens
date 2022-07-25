import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
import { AuthService } from '../../../../services/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl('')
    });
    submitted = false;

    constructor(private formBuilder: FormBuilder,
        readonly loginService: AuthService,
        readonly messageService: ToastrService,
        readonly router: Router) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group(
            {
                username: [
                    '',
                    [
                        Validators.required
                    ],
                ],
                password: [
                    '',
                    [
                        Validators.required
                    ],
                ]
            }
        );
    }

    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
    }

    async onSubmit(): Promise<void> {
        this.messageService.clear();
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

        this.loginService.login(this.form.get('username')?.value, this.form.get('password')?.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['inventory']);
                });


    }

    onReset(): void {
        this.submitted = false;
        this.form.reset();
    }
}
