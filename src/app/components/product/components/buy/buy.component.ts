import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../services/product.service';
import { ActionList } from '../../../layout/components/layout/actions.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../../../../services/loading.service';

@Component({
    selector: 'app-buy',
    templateUrl: './buy.component.html',
    styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
    form: FormGroup = new FormGroup({
        stock: new FormControl(''),
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
                unitValue: [
                    '',
                    [
                        Validators.required,
                        Validators.min(0)
                    ],
                ],
                stock: ['', [
                    Validators.required,
                    Validators.min(1)]
                ]
            }
        );
    }


    get f(): { [key: string]: AbstractControl } {
        return this.form.controls;
    }

    async saveProduct() {
        try {
            debugger
            this.messageService.clear();
            this.submitted = true;

            if (this.form.invalid) {
                return;
            }

            let buy = {
                date: new Date(),
                quantity: this.form.get('stock')?.value,
                userCode: JSON.parse(localStorage.getItem('user') || '{}').id,
                productCode: this.productService.product.id,
                unitValue: this.form.get('unitValue')?.value
            }

            await this.productService.saveProductBuy(buy);
            this.messageService.success('Ingreso de producto creado correctamente.');
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
