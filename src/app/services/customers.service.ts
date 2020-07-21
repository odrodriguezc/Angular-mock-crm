import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  baseUrl: string = 'https://5ed8afb14378690016c6a3da.mockapi.io/customers';
  constructor(protected http: HttpClient) {}

  public findAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      'https://5ed8afb14378690016c6a3da.mockapi.io/customers'
    );
  }

  public find(id: string) {
    return this.http.get<Customer>(
      'https://5ed8afb14378690016c6a3da.mockapi.io/customers/' + id
    );
  }

  public delete(id: string) {
    return this.http.delete<Customer>(
      'https://5ed8afb14378690016c6a3da.mockapi.io/customers/' + id
    );
  }

  public create(customer: Customer) {
    return this.http.post<Customer>(
      'https://5ed8afb14378690016c6a3da.mockapi.io/customers',
      customer
    );
  }

  public update(customer: Customer) {
    return this.http.put<Customer>(
      'https://5ed8afb14378690016c6a3da.mockapi.io/customers/' + customer.id,
      customer
    );
  }
}
