import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '../../../services/CreateUserService';
import CreateClientService from '../../../services/CreateClientService';
import CreateEstablishmentService from '../../../services/CreateEstablishmentService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, type, tel } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
      type,
      tel,
    });

    if (type === 'client') {
      const { cpf, birth_date } = request.body;
      const createClient = container.resolve(CreateClientService);

      const client = await createClient.execute({
        cpf,
        birth_date,
        id: user.id,
      });

      return response.json(classToClass({ ...client, ...user }));
    }

    if (type === 'establishment') {
      const { cnpj } = request.body;
      const createEstablishment = container.resolve(CreateEstablishmentService);

      const establishment = await createEstablishment.execute({
        cnpj,
        id: user.id,
      });
      return response.json(classToClass({ ...establishment, ...user }));
    }

    return response.json(classToClass(user));
  }
}
