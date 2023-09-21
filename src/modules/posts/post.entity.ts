import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from '../users/user.entity';
import { Category } from '../categories/category.entity';

@Entity('posts')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: Date,
  })
  date: Date;
  @ManyToOne(() => User, (user) => user.post)
  user: User;
  @ManyToMany(() => Category, (category) => category.post)
  @JoinTable()
  category: Category[];
}
