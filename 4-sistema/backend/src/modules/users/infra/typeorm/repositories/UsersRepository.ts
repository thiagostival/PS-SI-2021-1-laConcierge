import { getRepository, Not, Repository } from 'typeorm';

import ICreateUserDTO from '../../../model/ICreateUser';
import IFindUsersByType from '../../../model/IFindUsersByType';
import IUsersRepository from '../../../repositories/IUsersRepository';

import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);

    return user;
  }

  public async findAllByType({
    except_user_id,
    type,
  }: IFindUsersByType): Promise<User[] | undefined> {
    let users: User[];

    if (except_user_id) {
      users = await this.ormRepository.find({
        relations: [type],
        where: {
          id: Not(except_user_id),
          type,
        },
      });
    } else {
      users = await this.ormRepository.find({
        relations: [type],
        where: {
          type,
        },
      });
    }

    return users;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create(userData);

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
