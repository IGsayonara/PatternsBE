import { ProductTransitionEntity } from '../entities/productTransitionEntity';
import { ProductTransition } from '../interfaces/productTransition.interface';
import {
  mapProductEntityToInterface,
  mapProductInterfaceToDto,
} from '../../products/serializers/product.serializer';
import { ProductTransitionDto } from '../dto/productTransition.dto';

export function mapProductTransitionEntityToInterface(
  transition: ProductTransitionEntity,
): ProductTransition {
  return {
    ...transition,
    sourceProduct: mapProductEntityToInterface(transition.sourceProduct),
    targetProduct: mapProductEntityToInterface(transition.targetProduct),
  };
}

export function mapProductTransitionInterfaceToDto(
  transition: ProductTransition,
): ProductTransitionDto {
  return {
    ...transition,
    sourceProduct: mapProductInterfaceToDto(transition.sourceProduct),
    targetProduct: mapProductInterfaceToDto(transition.targetProduct),
  };
}
