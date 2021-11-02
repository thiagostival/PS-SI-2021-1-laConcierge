import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OccupancyController from '../controllers/OccupancyController';
import FindEstablishmentController from '../controllers/FindEstablishmentController';
import FindAllEstablishmentController from '../controllers/FindAllEstablishmentController';

import ensureAuthenticated from '../../../../users/infra/http/middlewares/ensureAuthenticated';

const establishment = Router();
const occupancyController = new OccupancyController();
const findEstablishmentController = new FindEstablishmentController();
const findAllEstablishmentController = new FindAllEstablishmentController();

establishment.use(ensureAuthenticated);

establishment.get(
  '/',
  findAllEstablishmentController.index,
);

establishment.get(
  '/:est_id',
  celebrate({
    [Segments.PARAMS]: {
      est_id: Joi.string().uuid().required(),
    },
  }),
  findEstablishmentController.index,
);

establishment.post(
  '/occupancy',
  celebrate({
    [Segments.BODY]: {
      max: Joi.number().required(),
      busy: Joi.number().required(),
      available: Joi.number(),
    },
  }),
  occupancyController.create,
);

establishment.get(
  '/occupancy/:est_id',
  celebrate({
    [Segments.PARAMS]: {
      est_id: Joi.string().uuid().required(),
    },
  }),
  occupancyController.create,
);

export default establishment;
