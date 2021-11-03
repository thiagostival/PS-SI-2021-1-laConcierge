import { Router } from 'express';

import usersRouter from '../modules/users/infra/http/routes/users.routes';
import sessionsRouter from '../modules/users/infra/http/routes/sessions.routes';

import establishmentRouter from '../modules/establishment/infra/http/routes/establishment.routes';

const routes = Router();

routes.use('/api/users', usersRouter);
routes.use('/api/sessions', sessionsRouter);
routes.use('/api/establishment', establishmentRouter);

export default routes;
