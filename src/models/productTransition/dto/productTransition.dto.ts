import { ProductDto } from '../../products/dto/product.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumberString } from 'class-validator';

export class ProductTransitionDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  sourceProduct: ProductDto;

  @ApiProperty()
  targetProduct: ProductDto;

  @ApiProperty()
  sourceInstructions: string;

  @ApiProperty()
  targetInstructions: string;

  @ApiProperty({ required: false })
  nb?: string;

  @ApiProperty({ required: false })
  rp?: string;
}

export class CreateProductTransitionDto {
  @ApiProperty()
  @IsNumberString()
  sourceProductId: number;

  @ApiProperty()
  @IsNumberString()
  targetProductId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sourceInstructions: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  targetInstructions: string;

  @ApiProperty({ required: false })
  @IsString()
  nb?: string;

  @ApiProperty({ required: false })
  @IsString()
  rp?: string;
}
