import { ProductTransition } from './interfaces/productTransition.interface';
import { ProductTransitionEntity } from './entities/productTransitionEntity';
import { mapProductTransitionEntityToInterface } from './serializers/productTransition.serializer';
import { CreateProductTransitionDto } from './dto/productTransition.dto';
import { ProductService } from '../products/product.service';
import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FindOptionsWhere } from 'typeorm';

@Injectable()
export class ProductTransitionService {
  constructor(private productService: ProductService) {}
  async findAll(): Promise<ProductTransition[]> {
    const transitions = await ProductTransitionEntity.find();
    return transitions.map(mapProductTransitionEntityToInterface);
  }

  async findOne(
    options: FindOptionsWhere<ProductTransitionEntity>,
  ): Promise<ProductTransition> {
    const transition = await ProductTransitionEntity.findOneBy(options);

    if (!transition) {
      throw new NotFoundException('Transition not found');
    }

    return mapProductTransitionEntityToInterface(transition);
  }

  async addOne(
    transition: CreateProductTransitionDto,
  ): Promise<ProductTransition> {
    const { sourceProductId, targetProductId } = transition;
    if (sourceProductId === targetProductId) {
      throw new ForbiddenException('Target and Source products are the same');
    }
    await ProductTransitionEntity.insert({
      ...transition,
      sourceProduct: sourceProductId as any,
      targetProduct: targetProductId as any,
    }).catch((err) => {
      console.log(err);
      throw new BadRequestException('Transition already exists');
    });

    const entity = await ProductTransitionEntity.findOneBy({
      sourceProduct: { id: sourceProductId },
      targetProduct: { id: targetProductId },
    });

    return mapProductTransitionEntityToInterface(entity);
  }
  async editOne(
    options: FindOptionsWhere<ProductTransitionEntity>,
    edited: Partial<CreateProductTransitionDto>,
  ): Promise<ProductTransition> {
    const transition = await ProductTransitionEntity.findOneBy(options);

    if (!transition) {
      throw new NotFoundException('Transition not found');
    }

    Object.assign(transition, edited);

    await transition.save();

    return this.findOne(options);
  }

  async deleteOne(options: FindOptionsWhere<ProductTransitionEntity>) {
    await ProductTransitionEntity.delete(options);
  }
}
