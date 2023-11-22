import { ApiProperty } from '@nestjs/swagger';

export class InstructionsDto {
  @ApiProperty()
  start: string;

  @ApiProperty()
  stop: string;

  @ApiProperty({ required: false })
  note?: string;

  @ApiProperty({ required: false })
  dosage?: string;
}

export class ProductDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  localizedTitle: string;

  @ApiProperty({ required: false })
  category?: string;

  @ApiProperty({ required: false })
  categoryShortname?: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ required: false })
  instructions?: InstructionsDto;
}

export class CreateProductDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  localizedTitle: string;

  @ApiProperty({ required: false })
  category?: string;

  @ApiProperty({ required: false })
  categoryShortname?: string;

  @ApiProperty({ required: false })
  instructions?: InstructionsDto;
}
