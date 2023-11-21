import { ApiProperty } from '@nestjs/swagger';

export class InstructionsDto {
  @ApiProperty()
  start: string;

  @ApiProperty()
  stop: string;

  @ApiProperty()
  note: string;

  @ApiProperty()
  dosage: string;
}

export class ProductDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  localizedTitle: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  categoryShortname: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  instructions: InstructionsDto;
}

export class CreateProductDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  localizedTitle: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  categoryShortname: string;

  @ApiProperty()
  instructions: InstructionsDto;
}
