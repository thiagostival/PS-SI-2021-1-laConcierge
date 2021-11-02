import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';

import Establishment from '../../users/infra/typeorm/entities/Establishment';
import IEstablishmentRepository from '../../users/repositories/IEstablishmentRepository';

interface IRequest {
  except_user_id?: string;
}

@injectable()
class FindAllEstablishmentService {
  constructor(
    @inject('EstablishmentRepository')
    private establishmentRepository: IEstablishmentRepository,
  ) {}

  public async execute({
    except_user_id,
  }: IRequest): Promise<Establishment[] | undefined> {
    const establishment =
      await this.establishmentRepository.findAllEstablishment({
        except_user_id,
      });

    if (!establishment) {
      throw new AppError('establishments not found!');
    }

    return establishment;
  }
}

export default FindAllEstablishmentService;
