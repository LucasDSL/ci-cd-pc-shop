import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Part {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  description: string;

  @Column()
  price: number;
}
