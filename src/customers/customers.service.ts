import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';
import { Customer } from './types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: '@gmail.com',
      name: 'An',
    },
    {
      id: 2,
      email: '@gmail.com',
      name: 'An',
    },
    {
      id: 3,
      email: '@gmail.com',
      name: 'An',
    },
    {
      id: 3,
      email: '@gmail.com',
      name: 'An',
    },
  ];

  findUserById(id: number) {
    return this.customers.find((u) => u.id === id);
  }

  getCustomer() {
    return this.customers;
  }

  createCustomer(customer: CreateCustomerDto) {
    this.customers.push(customer);
  }
}
