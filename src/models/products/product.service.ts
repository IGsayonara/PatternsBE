import { ProductEntity } from './entities/product.entity';
import { Product } from './interfaces/product.interface';

export class ProductService {
  async findAll(): Promise<Product[]> {
    return await ProductEntity.find();
  }
}
