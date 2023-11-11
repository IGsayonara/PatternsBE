import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}

export class CreateProductDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
