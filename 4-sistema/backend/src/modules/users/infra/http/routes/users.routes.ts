import { Router } from 'express';
import multer from 'multer';
import { celebrate, Segments, Joi } from 'celebrate';

import uploadConfig from '../../../../../config/upload';

import UsersController from '../controllers/UsersController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();

const upload = multer(uploadConfig.multer);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      type: Joi.string().valid('client','establishment').required(),
      tel: Joi.string(),
      cnpj: Joi.string().when('type', {
        is: 'establishment',
        then: Joi.string().required().min(14).max(14),
      }),
      cpf: Joi.string().when('type', {
        is: 'client',
        then: Joi.string().required().min(11).max(11),
      }),
      birth_date: Joi.string().when('type', {
        is: 'client',
        then: Joi.string(),
      }),
    },
  }),
  usersController.create,
);

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'));

export default usersRouter;
