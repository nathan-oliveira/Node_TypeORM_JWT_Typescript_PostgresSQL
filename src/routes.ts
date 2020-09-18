import  { Router, Request, Response } from 'express'
import { saveUser, listUser, login } from './controller/UserController'

import { auth } from './middlewares/auth'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: "API ON" });
})

routes.post('/session', login);

routes.use(auth);

routes.get('/users', listUser);
routes.post('/users', saveUser);

export default routes;