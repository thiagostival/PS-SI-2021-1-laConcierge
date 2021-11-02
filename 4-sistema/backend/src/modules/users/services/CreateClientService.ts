import { injectable, inject } from 'tsyringe';

import IClientRepository from '../repositories/IClientRepository';

import Client from '../infra/typeorm/entities/Client';

interface IRequest {
  id: string;
  cpf: string;
  birth_date: Date;
}

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  public async execute({ id, cpf, birth_date }: IRequest): Promise<Client> {
    const user = await this.clientRepository.create({
      id,
      cpf,
      birth_date,
    });

    return user;
  }
}

export default CreateClientService;
