import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('fail')
export class Fail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  created_at: Date;
}
