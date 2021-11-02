import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('address')
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  street: string;

  @Column()
  district: string;

  @Column()
  complement: string;

  @Column()
  reference: string;

  @Column()
  number: string;

  @Column()
  zip: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Address;
