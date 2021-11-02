import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import FindEstablishmentService from '../../../services/FindEstablishmentService';

export default class FindEstablishmentController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { est_id } = request.params;

    const findEstablishment = container.resolve(
      FindEstablishmentService,
    );

    const find = await findEstablishment.execute({
      est_id,
    });

    return response.json(classToClass(find));
  }
}
