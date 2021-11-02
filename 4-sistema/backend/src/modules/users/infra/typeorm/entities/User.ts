import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  // OneToOne,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';

import uploadConfig from '../../../../../config/upload';
// import Client from './Client';
// import Establishment from './Establishment';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  tel: string;

  @Column()
  type: 'client' | 'establishment';

  // @OneToOne(() => Client, c => c.user, { nullable: true })
  // client: Client;

  // @OneToOne(() => Establishment, e => e.user, { nullable: true })
  // establishment: Establishment;

  @Column()
  @Exclude()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'avatar_url' })
  getAvatarUrl(): string | null {
    if (!this.avatar) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.avatar}`;
      default:
        return null;
    }
  }
}

export default User;
