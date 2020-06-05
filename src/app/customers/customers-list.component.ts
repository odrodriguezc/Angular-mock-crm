import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  template: `
    <h1>Les Clients</h1>
    <a href="#" class="btn btn-link">Créer un client</a>
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
        <tr>
          <td>1</td>
          <td>Laura ROdriguez</td>
          <td>laura@gmail.fr</td>
          <td>5</td>
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
export class CustomersListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
