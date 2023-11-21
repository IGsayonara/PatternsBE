import { CreateProductDto, ProductDto } from '../dto/product.dto';
import { Product } from '../interfaces/product.interface';
import { ProductEntity } from '../entities/product.entity';

export function mapProductInterfaceToDto(product: Product): ProductDto {
  return {
    id: product.id,
    title: product.title,
    localizedTitle: product.localizedTitle,
    description: product.description,
    instructions: product.instructions,
  };
}

export function mapProductEntityToInterface(product: ProductEntity): Product {
  const { id, title, description, createdAt, updatedAt, localizedTitle } =
    product;
  return {
    id,
    title,
    localizedTitle,
    description,
    createdAt,
    updatedAt,
    instructions: {
      start: product.startInstructions,
      stop: product.stopInstructions,
      note: product.note,
    },
  };
}

export function mapCreateProductDtoToEntity(
  product: Partial<CreateProductDto>,
): Partial<ProductEntity> {
  const { title, description, instructions } = product;

  return {
    title,
    description,
    startInstructions: instructions.start,
    stopInstructions: instructions.stop,
    note: instructions.note,
  };
}
