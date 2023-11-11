import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  SetMetadata,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { mapProductInterfaceToDto } from './serializers/product.serializer';
import { CreateProductDto } from './dto/product.dto';
import { RoleGuard } from '../../common/guards/role.guard';
import { JwtAuthGuard } from '../../authentication/guards/jwt-auth.guard';
import { getEmptySuccessMessage } from '../../common/helpers/emptySuccessMessage';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@UsePipes(new ValidationPipe())
@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  async findAll() {
    const products = await this.productService.findAll();
    return products.map(mapProductInterfaceToDto);
  }

  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const product = await this.productService.findOne({ id });
      return mapProductInterfaceToDto(product);
    } catch {
      throw new NotFoundException();
    }
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @SetMetadata('role', 'admin')
  @Post()
  async addOne(@Body() createProductDto: CreateProductDto) {
    const product = await this.productService.addOne(createProductDto);
    return mapProductInterfaceToDto(product);
  }
  @UseGuards(JwtAuthGuard, RoleGuard)
  @SetMetadata('role', 'admin')
  @Put('/:id')
  async editOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() edited: Partial<CreateProductDto>,
  ) {
    const product = await this.productService.editOne({ id }, edited);
    return mapProductInterfaceToDto(product);
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @SetMetadata('role', 'admin')
  @Delete('/:id')
  async deleteOne(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.productService.deleteOne({ id });
      return getEmptySuccessMessage();
    } catch {
      throw new InternalServerErrorException();
    }
  }
}
