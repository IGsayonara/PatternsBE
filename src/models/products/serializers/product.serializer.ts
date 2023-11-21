import { CreateProductDto, ProductDto } from '../dto/product.dto';
import { Product } from '../interfaces/product.interface';
import { ProductEntity } from '../entities/product.entity';

export function mapProductInterfaceToDto(product: Product): ProductDto {
  return {
    ...product,
  };
}

export function mapProductEntityToInterface(product: ProductEntity): Product {
  return {
    ...product,
    instructions: {
      start: product.startInstructions,
      stop: product.stopInstructions,
      note: product.note,
      dosage: product.dosage,
    },
  };
}

export function mapCreateProductDtoToEntity(
  product: Partial<CreateProductDto>,
): Partial<ProductEntity> {
  const instructions = product.instructions;
  return {
    ...product,
    ...(instructions && {
      startInstructions: instructions.start,
      stopInstructions: instructions.stop,
      note: instructions.note,
      dosage: instructions.dosage,
    }),
  };
}
