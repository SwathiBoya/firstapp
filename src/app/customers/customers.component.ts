import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CUSTOMERS } from '../customermock';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers = CUSTOMERS;
  customer: Customer = {
    id: 0,
    name: '',
    email:''
  };
  constructor() { }

onAdd(){
    if(this.customer.name.length == 0 && this.customer.email.length == 0){
      alert("Please fill Username and password");
    }
    else if(this.customer.name.length > 0 && this.customer.email.length > 0){
      this.customer.id = this.customers.length;
      this.customer = {
        id: this.customers.length + 1,
        name: this.customer.name,
        email:this.customer.email
      };
      this.customers.push(this.customer);
      alert("Add customer");
    }
}
onRemove(custnum){
  var customerList:Customer[] = [];
  for(var i = 0;i<this.customers.length;i++){
    if(this.customers[i].id != custnum ){
      customerList.push(this.customers[i]);
    }
  }
  this.customers=customerList;
}
selectedHero: Customer;
onSelect(hero: Customer): void {
  this.selectedHero = hero;
}
ngOnInit() {
  }
  // selectedCustomer: Customer;
  // onSelect(customer: Customer): void {
  //   this.selectedCustomer = customer;
  // }
  
}
