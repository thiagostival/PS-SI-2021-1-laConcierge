import User from '../infra/typeorm/entities/User';
import ICreateUser from '../model/ICreateUser';

export default interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUser): Promise<User>;
  save(user: ICreateUser): Promise<User>;
}
