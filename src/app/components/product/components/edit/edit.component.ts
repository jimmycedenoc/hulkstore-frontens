import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';
import { ActionList } from '../../../layout/components/layout/actions.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../../../../services/loading.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    form: FormGroup = new FormGroup({
        name: new FormControl(''),
        categoryCode: new FormControl(''),
        unitValue: new FormControl('')
    });
    submitted = false;
    actions: Array<ActionList> = [];

    constructor(readonly productService: ProductService,
        private formBuilder: FormBuilder,
        readonly messageService: ToastrService,
        readonly router: Router,
        readonly loadingService: LoadingService) {

    }

    ngOnInit(): void {
        this.actions.push(
            {
                function: this.saveProduct.bind(this),
                icon: 'fa fa-floppy-o',
                name: 'Guardar',
            }, {
            function: this.goToProduct.bind(this),
            icon: 'fa fa-ban',
            name: 'Cancelar',
        });

        this.form = this.formBuilder.group(
            {
                name: [
                    '',
                    [
                        Validators.required,
                        Validators.maxLength(255),
                    ],
                ],
                unitValue: [
                    '',
                    [
                        Validators.required
                    ],
                ],
                categoryCode: ['', Validators.required]
            }
        );
    }


    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
    }

    async saveProduct() {
        try {
            this.messageService.clear();
            this.submitted = true;

            if (this.form.invalid) {
                return;
            }

            await this.productService.saveProduct(this.form.value);
            this.messageService.success('Producto creado correctamente.');
            this.goToProduct();


        } catch (err) {
            this.messageService.error('Ha ocurrido un error al guardar el producto.');
        }
    }

    goToProduct() {
        this.loadingService.hide();
        this.router.navigate(['product']);
    }

}
