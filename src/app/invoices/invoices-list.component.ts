import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices-list',
  template: `
    <h1>Les Factures</h1>

    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Client</th>
          <th>Montant</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>Laura ROdriguez</td>
          <td>300 $</td>
          <td>01/01/2020</td>
          <td>
            <button class="btn btn-sm btn-primary mr-2">Modifier</button>
            <button class="btn btn-danger btn-sm">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [],
})
export class InvoicesListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
