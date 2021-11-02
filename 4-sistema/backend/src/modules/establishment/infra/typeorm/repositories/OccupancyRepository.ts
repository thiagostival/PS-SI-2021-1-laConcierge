import { getRepository, Repository } from 'typeorm';

import ICreateOcuppancy from '../../../model/ICreateOcuppancy';
import IOccupancyRepository from '../../../repositories/IOccupancyRepository';

import Occupancy from '../entities/Occupancy';

class OccupancyRepository implements IOccupancyRepository {
  private ormRepository: Repository<Occupancy>;

  constructor() {
    this.ormRepository = getRepository(Occupancy);
  }

  public async findOccupancyById(id: string): Promise<Occupancy | undefined> {
    const occupancy = await this.ormRepository.findOne(id);

    return occupancy;
  }

  public async createOccupancy(occupancyData: ICreateOcuppancy): Promise<Occupancy> {
    const occupancy = this.ormRepository.create(occupancyData);

    await this.ormRepository.save(occupancy);

    return occupancy;
  }
}

export default OccupancyRepository;
