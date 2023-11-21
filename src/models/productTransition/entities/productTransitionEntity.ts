import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  Index,
} from 'typeorm';
import { ProductEntity } from '../../products/entities/product.entity';

@Entity()
@Index(['sourceProduct', 'targetProduct'], { unique: true })
export class ProductTransitionEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  sourceInstructions: string;

  @Column({ type: 'text' })
  targetInstructions: string;

  @Column({ type: 'text' })
  nb: string;

  @Column({ type: 'text' })
  rp: string;

  @ManyToOne(() => ProductEntity, (product) => product.transitionsFrom, {
    eager: true,
  })
  sourceProduct: ProductEntity;

  @ManyToOne(() => ProductEntity, (product) => product.transitionsTo, {
    eager: true,
  })
  targetProduct: ProductEntity;

  @Column({ type: 'text', nullable: true })
  transitionInstructions: string;
}
