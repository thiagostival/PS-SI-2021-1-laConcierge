import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity('client')
class Client {
  @PrimaryColumn()
  id: string;

  @Column({ length: 11 })
  cpf: string;

  @Column('time with time zone')
  birth_date: Date;
}

export default Client;
