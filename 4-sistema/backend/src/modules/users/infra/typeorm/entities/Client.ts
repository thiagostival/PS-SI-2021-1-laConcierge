import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity('client')
class Client {
  @PrimaryColumn()
  id: string;

  @Column({ length: 11 })
  cpf: string;

  @Column('time with time zone')
  birth_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Client;
