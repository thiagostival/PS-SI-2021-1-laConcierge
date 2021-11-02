import { Entity, Column, ManyToOne, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';

// import Menu from './Menu';
// import Occupancy from './Occupancy';

@Entity('establishment')
class Establishment {
  @PrimaryColumn()
  id: string;

  // @OneToOne(() => User, u => u.client)
  // @JoinColumn({ name: 'id' })
  // user: User;

  @Column({ length: 14 })
  cnpj: string;

  // @Column(() => Occupancy)
  // occupancy: Occupancy;

  // @ManyToOne(() => Menu)
  // menu: Menu[];
}

export default Establishment;
