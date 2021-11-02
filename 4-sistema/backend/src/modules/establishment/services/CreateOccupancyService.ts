import { injectable, inject } from 'tsyringe';


import AppError from '../../../shared/errors/AppError';

import IOccupancyRepository from '../repositories/IOccupancyRepository';

import Occupancy from '../infra/typeorm/entities/Occupancy';
import IEstablishmentRepository from '../../users/repositories/IEstablishmentRepository';

interface IRequest {
  user_id: string;
  max: number;
  busy: number;
  available: number;
}

@injectable()
class CreateOccupancyService {
  constructor(
    @inject('OccupancyRepository')
    private occupancyRepository: IOccupancyRepository,

    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentRepository,
  ) {}

  public async execute({ user_id, max, busy, available }: IRequest): Promise<Occupancy> {
    const establishment = await this.establishmentRepository.findById(user_id);

    if (!establishment) {
      throw new AppError('User not found!');
    }

    const occupancy = await this.occupancyRepository.createOccupancy({
      max,
      busy,
      available,
    });


    await this.establishmentRepository.save({
      ...establishment,
      occupancy_id: occupancy.id,
    });

    return occupancy;
  }
}

export default CreateOccupancyService;
