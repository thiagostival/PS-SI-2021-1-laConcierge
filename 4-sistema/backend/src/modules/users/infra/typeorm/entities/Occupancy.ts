import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('occupancy')
class Occupancy {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('integer')
  max: number;

  @Column('integer')
  busy: number;

  @Column('integer')
  available: number;
}

export default Occupancy;
