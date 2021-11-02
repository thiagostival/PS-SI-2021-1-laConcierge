import Client from '../infra/typeorm/entities/Client';
import ICreateClient from '../model/ICreateClient';

export default interface IUsersRepository {
  findById(id: string): Promise<Client | undefined>;
  create(data: ICreateClient): Promise<Client>;
}
