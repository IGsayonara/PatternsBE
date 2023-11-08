import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductTransitionService } from './productTransition.service';
import { mapProductTransitionInterfaceToDto } from './serializers/productTransition.serializer';
import { CreateProductTransitionDto } from './dto/productTransition.dto';

@UsePipes(new ValidationPipe())
@Controller('/product/transition')
export class ProductTransitionController {
  constructor(private productTransitionService: ProductTransitionService) {}
  @Get()
  async findAll() {
    const transitions = await this.productTransitionService.findAll();
    return transitions.map(mapProductTransitionInterfaceToDto);
  }

  @Post()
  async addOne(@Body() createProductTransitionDto: CreateProductTransitionDto) {
    const transition = await this.productTransitionService.addOne(
      createProductTransitionDto,
    );

    return mapProductTransitionInterfaceToDto(transition);
  }
}
