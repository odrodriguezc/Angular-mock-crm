import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomersListComponent } from './customers/customers-list.component';
import { InvoicesListComponent } from './invoices/invoices-list.component';
import { CustomerFormComponent } from './customers/customer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersListComponent,
    CustomerFormComponent,
    InvoicesListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
