import User from '../infra/typeorm/entities/User';
import ICreateUser from '../model/ICreateUser';
import IFindUsersByType from '../model/IFindUsersByType';

export default interface IUsersRepository {
  findAllByType(data: IFindUsersByType): Promise<User[] | undefined>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUser): Promise<User>;
  save(user: ICreateUser): Promise<User>;
}
