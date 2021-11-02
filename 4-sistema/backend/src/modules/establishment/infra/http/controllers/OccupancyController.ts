import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateOccupancyService from '../../../services/CreateOccupancyService';

export default class OccupancyController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { max, busy, available } = request.body;

    const createOccupancy = container.resolve(CreateOccupancyService);

    const occupancy = await createOccupancy.execute({
      user_id,
      max,
      busy,
      available,
    });

    return response.json(classToClass(occupancy));
  }
}
