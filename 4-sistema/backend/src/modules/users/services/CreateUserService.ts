import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
  type: 'client' | 'establishment';
  tel: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
    type,
    tel,
  }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used!');
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password,
      type,
      tel,
    });

    return user;
  }
}

export default CreateUserService;
