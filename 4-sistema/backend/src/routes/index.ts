import { Router } from 'express';

import usersRouter from '../modules/users/infra/http/routes/users.routes';
import sessionsRouter from '../modules/users/infra/http/routes/sessions.routes';

import establishmentRouter from '../modules/establishment/infra/http/routes/establishment.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/establishment', establishmentRouter);

export default routes;
