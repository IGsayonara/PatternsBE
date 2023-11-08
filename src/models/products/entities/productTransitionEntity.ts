import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity()
export class ProductTransitionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ProductEntity, (product) => product.transitionsFrom)
  sourceProduct: ProductEntity;

  @ManyToOne(() => ProductEntity, (product) => product.transitionsTo)
  targetProduct: ProductEntity;

  @Column({ type: 'text', nullable: true })
  transitionInstructions: string;
}
