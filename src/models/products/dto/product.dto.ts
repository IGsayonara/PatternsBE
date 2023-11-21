import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  localizedTitle: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  instructions: {
    start: string;
    stop: string;
    note: string;
  };
}

export class CreateProductDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  instructions: {
    start: string;
    stop: string;
    note: string;
  };
}
