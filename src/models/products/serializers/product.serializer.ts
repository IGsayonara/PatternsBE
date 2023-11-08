import { ProductDto } from '../dto/product.dto';
import { Product } from '../interfaces/product.interface';
import { ProductEntity } from '../entities/product.entity';

export function mapProductInterfaceToDto(product: Product): ProductDto {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
  };
}

export function mapProductEntityToInterface(product: ProductEntity): Product {
  const { id, title, description, createdAt, updatedAt } = product;
  return {
    id,
    title,
    description,
    createdAt,
    updatedAt,
  };
}
