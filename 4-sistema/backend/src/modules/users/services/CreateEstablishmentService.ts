import { injectable, inject } from 'tsyringe';

import Establishment from '../infra/typeorm/entities/Establishment';
import IEstablishmentRepository from '../repositories/IEstablishmentRepository';

interface IRequest {
  id: string;
  cnpj: string;
}

@injectable()
class CreateEstablishmentService {
  constructor(
    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentRepository,
  ) {}

  public async execute({ id, cnpj }: IRequest): Promise<Establishment> {
    const establishment = await this.establishmentRepository.create({
      id,
      cnpj,
    });

    return establishment;
  }
}

export default CreateEstablishmentService;
