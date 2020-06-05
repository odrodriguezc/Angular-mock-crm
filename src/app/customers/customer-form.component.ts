import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  template: `
    <h1>Créer un client</h1>
    <form>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Non complet"
          name="fullName"
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          placeholder="Adresse email"
          name="email"
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          class="form-control"
          placeholder="Nombre de factures"
          name="invoices"
        />
      </div>
      <button class="btn btn-success">Enregistrer</button>
    </form>
  `,
  styles: [],
})
export class CustomerFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
