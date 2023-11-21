import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { ProductTransitionEntity } from '../../productTransition/entities/productTransitionEntity';

@Entity()
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  title: string;

  @Column()
  localizedTitle: string;

  @Column()
  description: string;

  @Column({ type: 'text' })
  startInstructions: string;

  @Column({ type: 'text' })
  stopInstructions: string;

  @Column({ type: 'text' })
  note: string;

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
