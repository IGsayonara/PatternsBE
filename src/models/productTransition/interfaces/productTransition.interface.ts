import { Product } from '../../products/interfaces/product.interface';

export interface ProductTransition {
  id: number;
  sourceProduct: Product;
  targetProduct: Product;
  sourceInstructions: string;
  targetInstructions: string;
  nb?: string;
  rp?: string;
}
