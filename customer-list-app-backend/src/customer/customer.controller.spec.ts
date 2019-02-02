import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customer.controller';

describe('Customer Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CustomerController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CustomerController = module.get<CustomerController>(CustomerController);
    expect(controller).toBeDefined();
  });
});
