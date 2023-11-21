import { ProductDto } from '../../products/dto/product.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ProductTransitionDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  sourceProduct: ProductDto;

  @ApiProperty()
  targetProduct: ProductDto;

  @ApiProperty()
  nb: string;

  @ApiProperty()
  rp: string;
}

export class CreateProductTransitionDto {
  @ApiProperty()
  transitionInstructions: string;

  @ApiProperty()
  sourceProductId: number;

  @ApiProperty()
  targetProductId: number;
}
