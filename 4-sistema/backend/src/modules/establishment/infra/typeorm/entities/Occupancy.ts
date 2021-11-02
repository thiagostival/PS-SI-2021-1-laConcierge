import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Occupancy;
