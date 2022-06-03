import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customers: CustomersService) {}
  @Get('/:id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customers.findUserById(id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(400).send({ msg: 'User not found' });
    }
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customers.findUserById(id);
    if (customer) return customer;
    else throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
  }

  @Get()
  getAllCustomer() {
    return this.customers.getCustomer();
  }

  @Post('/create')
  createCustomer(@Body() body: CreateCustomerDto) {
    this.customers.createCustomer(body);
  }
}
