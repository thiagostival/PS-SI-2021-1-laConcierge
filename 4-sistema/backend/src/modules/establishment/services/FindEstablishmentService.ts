import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';

import Establishment from '../../users/infra/typeorm/entities/Establishment';
import IEstablishmentRepository from '../../users/repositories/IEstablishmentRepository';

interface IRequest {
  est_id: string;
}

@injectable()
class FindEstablishmentService {
  constructor(
    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentRepository,
  ) {}

  public async execute({ est_id }: IRequest): Promise<Establishment | undefined> {
    const establishment = await this.establishmentRepository.findById(est_id);

    if (!establishment) {
      throw new AppError('establishment not found!');
    }

    return establishment;
  }
}

export default FindEstablishmentService;
