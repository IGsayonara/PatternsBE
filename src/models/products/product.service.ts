import { ProductEntity } from './entities/product.entity';
import { Product } from './interfaces/product.interface';
import { FindOptionsWhere } from 'typeorm';
import { CreateProductDto } from './dto/product.dto';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { mapProductEntityToInterface } from './serializers/product.serializer';
import { CreateUserDto } from '../user/dto/user.dto';
import { User } from '../user/interfaces/user.interface';
import { UserEntity } from '../user/entities/user.entity';

export class ProductService {
  async findAll(): Promise<Product[]> {
    return await ProductEntity.find();
  }

  async findOne(options: FindOptionsWhere<ProductEntity>): Promise<Product> {
    const product = await ProductEntity.findOneBy(options);
    return mapProductEntityToInterface(product);
  }

  async addOne(product: CreateProductDto): Promise<Product> {
    try {
      const productEntity = new ProductEntity();
      Object.assign(productEntity, product);
      await productEntity.save();
      return this.findOne({ title: product.title });
    } catch (err) {
      throw new BadRequestException('Product with such title already exists');
    }
  }

  async editOne(
    options: FindOptionsWhere<ProductEntity>,
    edited: Partial<CreateProductDto>,
  ) {
    const product = await ProductEntity.findOneBy(options);

    if (!product) {
      throw new NotFoundException();
    }

    Object.assign(product, edited);

    await product.save();
    return this.findOne(options);
  }

  async deleteOne(options: FindOptionsWhere<ProductEntity>) {
    await ProductEntity.delete(options);
  }
}
