import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import Menu from '../../../../establishment/infra/typeorm/entities/Menu';
import Occupancy from '../../../../establishment/infra/typeorm/entities/Occupancy';
import User from './User';

@Entity('establishment')
class Establishment {
  @PrimaryColumn()
  id: string;

  @Column({ length: 14 })
  cnpj: string;

  @Column()
  occupancy_id: string;

  @OneToOne(() => Occupancy)
  @JoinColumn({ name: 'occupancy_id' })
  occupancy: Occupancy;

  @Column()
  menu_id: string;

  @OneToOne(() => Menu)
  @JoinColumn({ name: 'menu_id' })
  menu: Menu

  @OneToOne(() => User)
  @JoinColumn({ name: 'id' })
  user: User

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Establishment;
