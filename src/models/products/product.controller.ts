import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { mapProductToDto } from './serializers/product.serializer';

@Controller('/product')
export class ProductController {
  constructor(private userService: ProductService) {}
  @Get('/all')
  async findCurrent() {
    return await this.userService
      .findAll()
      .then((users) => users.map(mapProductToDto));
  }
}
