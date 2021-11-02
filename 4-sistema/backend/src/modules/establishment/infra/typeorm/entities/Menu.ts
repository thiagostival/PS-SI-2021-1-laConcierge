import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import Dishes from './Dishes';

@Entity('menu')
class Menu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dishe_id: string;

  @ManyToOne(() => Dishes)
  @JoinColumn({ name: 'dishe_id' })
  dishe: Dishes;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Menu;
