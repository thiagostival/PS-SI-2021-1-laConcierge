import { getRepository, Repository } from 'typeorm';

import ICreateClient from '../../../model/ICreateClient';
import IClientRepository from '../../../repositories/IClientRepository';

import Client from '../entities/Client';

class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async findById(id: string): Promise<Client | undefined> {
    const client = await this.ormRepository.findOne(id);

    return client;
  }

  public async create(clientData: ICreateClient): Promise<Client> {
    const client = this.ormRepository.create(clientData);

    await this.ormRepository.save(client);

    return client;
  }
}

export default ClientRepository;
