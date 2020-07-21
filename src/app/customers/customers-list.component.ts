import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from '../services/customers.service';

@Component({
  selector: 'app-customers-list',
  template: `
    <h1>Les Clients</h1>
    <div class="alert alert-dismissible alert-danger" *ngIf="errorMessage">
      <button type="button" class="close" data-dismiss="alert">
        &times;
      </button>
      {{ errorMessage }}
    </div>

    <a routerLink="/customers/form" class="btn btn-link">Créer un client</a>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nom</th>
          <th>Email</th>
          <th>Factures</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr *ngFor="let c of customers">
          <td>{{ c.id }}</td>
          <td>{{ c.fullName }}</td>
          <td>{{ c.email }}</td>
          <td>{{ c.invoices }}</td>
          <td>
            <a
              class="btn btn-sm btn-primary mr-2"
              routerLink="/customers/{{ c.id }}"
              >Modifier</a
            >
            <button class="btn btn-danger btn-sm" (click)="handleDelete(c)">
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export class CustomersListComponent implements OnInit {
  errorMessage: string = '';
  customers: Customer[] = [];

  constructor(protected service: CustomerService) {}

  ngOnInit(): void {
    this.service
      .findAll()
      .subscribe((customers) => (this.customers = customers));
  }

  public handleDelete(customer: Customer) {
    this.service.delete(customer.id).subscribe(
      (deletedCustomer) => {
        const index = this.customers.findIndex((c) => c.id === customer.id);
        this.customers.splice(index, 1);
      },
      (error) => {
        this.errorMessage =
          'Attention, une erreur est survenue lors de la supp';
      }
    );
  }
}
