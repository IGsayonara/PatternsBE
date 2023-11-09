import { ProductTransition } from './interfaces/productTransition.interface';
import { ProductTransitionEntity } from './entities/productTransitionEntity';
import { mapProductTransitionEntityToInterface } from './serializers/productTransition.serializer';
import { CreateProductTransitionDto } from './dto/productTransition.dto';
import { ProductService } from '../products/product.service';
import { BadRequestException, ForbiddenException } from '@nestjs/common';

export class ProductTransitionService {
  constructor(private productService: ProductService) {}
  async findAll(): Promise<ProductTransition[]> {
    const transitions = await ProductTransitionEntity.find();
    return transitions.map(mapProductTransitionEntityToInterface);
  }

  async addOne(
    transition: CreateProductTransitionDto,
  ): Promise<ProductTransition> {
    const { sourceProductId, targetProductId, transitionInstructions } =
      transition;
    if (sourceProductId === targetProductId) {
      throw new ForbiddenException('Target and Source products are the same');
    }
    await ProductTransitionEntity.insert({
      sourceProduct: sourceProductId as any,
      targetProduct: targetProductId as any,
      transitionInstructions,
    }).catch(() => {
      throw new BadRequestException('Transition already exists');
    });

    const entity = await ProductTransitionEntity.findOneBy({
      sourceProduct: { id: sourceProductId },
      targetProduct: { id: targetProductId },
    });

    return mapProductTransitionEntityToInterface(entity);
  }
}
