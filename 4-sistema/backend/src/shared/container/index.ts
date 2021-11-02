import { container, delay } from 'tsyringe';

// import '@modules/users/providers';
import './providers';

import IUsersRepository from '../../modules/users/repositories/IUsersRepository';
import UsersRepository from '../../modules/users/infra/typeorm/repositories/UsersRepository';

import IClientRepository from '../../modules/users/repositories/IClientRepository';
import ClientRepository from '../../modules/users/infra/typeorm/repositories/ClientRepository';

import IEstablishmentRepository from '../../modules/users/repositories/IEstablishmentRepository';
import EstablishmentRepository from '../../modules/users/infra/typeorm/repositories/EstablishmentRepository';

import IOccupancyRepository from '../../modules/establishment/repositories/IOccupancyRepository';
import OccupancyRepository from '../../modules/establishment/infra/typeorm/repositories/OccupancyRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  delay(() => UsersRepository),
);
container.registerSingleton<IClientRepository>(
  'ClientRepository',
  delay(() => ClientRepository),
);
container.registerSingleton<IEstablishmentRepository>(
  'EstablishmentRepository',
  delay(() => EstablishmentRepository),
);

container.registerSingleton<IOccupancyRepository>(
  'OccupancyRepository',
  delay(() => OccupancyRepository),
);
