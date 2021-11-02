import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import FindAllEstablishmentService from '../../../services/FindAllEstablishmentService';

export default class FindAllEstablishmentController {
  public async index(request: Request, response: Response): Promise<Response> {
    const type_user = request.user.type;

    const findAllEstablishment = container.resolve(FindAllEstablishmentService);

    let find;

    if (type_user === 'establishment') {
      const user_id = request.user.id;
      find = await findAllEstablishment.execute({
        except_user_id: user_id,
      });
    } else {
      find = await findAllEstablishment.execute({ except_user_id: undefined });
    }

    return response.json(classToClass(find));
  }
}
