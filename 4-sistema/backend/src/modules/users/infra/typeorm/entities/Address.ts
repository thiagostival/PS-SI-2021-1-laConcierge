import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default Address;
