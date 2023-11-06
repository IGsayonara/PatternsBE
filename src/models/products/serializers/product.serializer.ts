import { ProductDto } from '../dto/product.dto';
import { Product } from '../interfaces/product.interface';

export function mapProductToDto(product: Product): ProductDto {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
  };
}
