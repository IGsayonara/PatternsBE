import { Product } from '../../products/interfaces/product.interface';

export interface ProductTransition {
  id: number;
  sourceProduct: Product;
  targetProduct: Product;
  transitionInstructions: string;
}
