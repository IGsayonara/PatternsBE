import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Product } from '../interfaces/product.interface';
import { ProductTransitionEntity } from '../../productTransition/entities/productTransitionEntity';

@Entity()
export class ProductEntity extends BaseEntity implements Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  title: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    () => ProductTransitionEntity,
    (transition) => transition.sourceProduct,
  )
  transitionsFrom: ProductTransitionEntity[];

  @OneToMany(
    () => ProductTransitionEntity,
    (transition) => transition.targetProduct,
  )
  transitionsTo: ProductTransitionEntity[];
}
