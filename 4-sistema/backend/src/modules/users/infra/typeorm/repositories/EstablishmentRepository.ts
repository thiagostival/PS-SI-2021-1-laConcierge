import { getRepository, Not, Repository } from 'typeorm';

import ICreateEstablishment from '../../../model/ICreateEstablishment';
import IFindAllEstablishment from '../../../model/IFindAllEstablishment';
import IEstablishmentRepository from '../../../repositories/IEstablishmentRepository';

import Establishment from '../entities/Establishment';

class EstablishmentRepository implements IEstablishmentRepository {
  private ormRepository: Repository<Establishment>;

  constructor() {
    this.ormRepository = getRepository(Establishment);
  }

  public async findById(id: string): Promise<Establishment | undefined> {
    const establishment = await this.ormRepository.findOne(id, {
      relations: ['occupancy', 'menu', 'user'],
    });

    return establishment;
  }

  public async findAllEstablishment({
    except_user_id,
  }: IFindAllEstablishment): Promise<Establishment[] | undefined> {
    let establishment: Establishment[];

    if (except_user_id) {
      establishment = await this.ormRepository.find({
        relations: ['occupancy', 'menu', 'user'],
        where: {
          id: Not(except_user_id),
        },
      });
    } else {
      establishment = await this.ormRepository.find({
        relations: ['occupancy', 'menu', 'user'],
      });
    }

    return establishment;
  }

  public async create(
    establishmentData: ICreateEstablishment,
  ): Promise<Establishment> {
    const establishment = this.ormRepository.create(establishmentData);

    await this.ormRepository.save(establishment);

    return establishment;
  }

  public async save(establishment: Establishment): Promise<Establishment> {
    return this.ormRepository.save(establishment);
  }
}

export default EstablishmentRepository;
