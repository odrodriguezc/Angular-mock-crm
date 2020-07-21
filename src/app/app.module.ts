import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomersListComponent } from './customers/customers-list.component';
import { InvoicesListComponent } from './invoices/invoices-list.component';
import { CustomerFormComponent } from './customers/customer-form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'customers/:id', component: CustomerFormComponent },
  { path: 'customers', component: CustomersListComponent },
  { path: 'invoices', component: InvoicesListComponent },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersListComponent,
    CustomerFormComponent,
    InvoicesListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
