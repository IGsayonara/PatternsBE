import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UserRoleEntity } from './userRole.entity';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    select: false,
  })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => UserRoleEntity, { eager: true })
  @JoinTable()
  roles: UserRoleEntity[];
}
