import { ProductDto } from '../../products/dto/product.dto';

export class ProductTransitionDto {
  id: number;
  transitionInstructions: string;
  sourceProduct: ProductDto;
  targetProduct: ProductDto;
}

export class CreateProductTransitionDto {
  transitionInstructions: string;
  sourceProductId: number;
  targetProductId: number;
}
