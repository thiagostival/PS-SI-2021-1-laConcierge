import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Dishes from './Dishes';

@Entity('menu')
class Menu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Dishes)
  menu: Dishes[];
}

export default Menu;
