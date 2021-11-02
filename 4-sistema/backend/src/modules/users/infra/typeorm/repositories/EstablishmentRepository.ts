import { getRepository, Repository } from 'typeorm';

import ICreateEstablishment from '../../../model/ICreateEstablishment';
import IEstablishmentRepository from '../../../repositories/IEstablishmentRepository';

import Establishment from '../entities/Establishment';

class EstablishmentRepository implements IEstablishmentRepository {
  private ormRepository: Repository<Establishment>;

  constructor() {
    this.ormRepository = getRepository(Establishment);
  }

  public async findById(id: string): Promise<Establishment | undefined> {
    const establishment = await this.ormRepository.findOne(id);

    return establishment;
  }

  public async create(
    establishmentData: ICreateEstablishment,
  ): Promise<Establishment> {
    const establishment = this.ormRepository.create(establishmentData);

    await this.ormRepository.save(establishment);

    return establishment;
  }
}

export default EstablishmentRepository;
