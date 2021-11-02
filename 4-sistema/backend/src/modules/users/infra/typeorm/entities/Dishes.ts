import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dishes')
class Dishes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('numeric')
  price: number;

  @Column()
  available: boolean;
}

export default Dishes;
