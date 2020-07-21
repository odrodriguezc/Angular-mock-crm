import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CustomerService } from '../services/customers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-customer-form',
  template: `
    <h1 *ngIf="!customer">Créer un client</h1>
    <h1 *ngIf="customer">Modifier un client</h1>
    <form #myForm="ngForm" (ngSubmit)="handleSubmit(myForm)">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Non complet"
          name="fullName"
          [class.is-invalid]="isInvalid(fullName)"
          ngModel
          #fullName="ngModel"
          required
          minlength="3"
        />
        <div class="invalid-feedback">
          <p *ngIf="fullName.hasError('required')">
            Le nom complet est obligatoire
          </p>
          <p *ngIf="fullName.hasError('minlength')">
            Le nom complet doit faire au moins 3 caractères
          </p>
        </div>
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          placeholder="Adresse email"
          name="email"
          [class.is-invalid]="isInvalid(email)"
          required
          email
          #email="ngModel"
          ngModel
        />
        <div class="invalid-feedback">
          <p *ngIf="email.hasError('required')">
            L'adresse emai est obligatoire
          </p>
          <p *ngIf="email.hasError('email')">
            L'adresse email ne correspond pas au format demandé '
          </p>
        </div>
      </div>
      <div class="form-group">
        <input
          type="number"
          class="form-control"
          placeholder="Nombre de factures"
          name="invoices"
          required
          #invoices="ngModel"
          ngModel
          [class.is-invalid]="isInvalid(invoices)"
        />
        <div class="invalid-feedback">
          <p *ngIf="invoices.hasError('required')">
            Le nombre de factures est obligatoire
          </p>
        </div>
      </div>
      <button class="btn btn-success">Enregistrer</button>
    </form>
  `,
  styles: [],
})
export class CustomerFormComponent implements OnInit, AfterViewInit {
  @ViewChild('myForm')
  form: NgForm;

  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    //1. dterminr si on est en edit ou create grace a la route
    const id = this.route.snapshot.paramMap.get('id');
    //2. Si, create => stop
    if (id === 'form') {
      return;
    }
    //3. sinon => appel api get customer
    this.customerService.find(id).subscribe((customer) => {
      this.customer = customer;
      //4. refiler des donnes au form
      this.form.setValue({
        fullName: customer.fullName,
        email: customer.email,
        invoices: customer.invoices,
      });
    });
  }

  handleSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    //on CREATE:
    if (!this.customer) {
      this.customerService.create(form.value).subscribe((customer) => {
        this.router.navigateByUrl('/customers');
      });
      return;
    }

    //ON EDIT
    // const updatedCustomer = this.form.value as Customer;
    // updatedCustomer.id = this.customer.id;

    //fusiiion des objects, le 2eme l'emporte sur le 1er
    const updatedCustomer = { ...this.customer, ...form.value };

    this.customerService.update(updatedCustomer).subscribe((customer) => {
      this.router.navigateByUrl('/customers');
    });
  }

  isInvalid(control: NgModel) {
    return control.invalid && (control.touched || this.form.submitted);
  }
}
