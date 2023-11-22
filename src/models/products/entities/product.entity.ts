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

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  categoryShortname: string;

  @Column()
  localizedTitle: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  dosage: string;

  @Column({ type: 'text', nullable: true })
  startInstructions: string;

  @Column({ type: 'text', nullable: true })
  stopInstructions: string;

  @Column({ type: 'text', nullable: true })
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
