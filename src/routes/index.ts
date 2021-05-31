import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'こんにちは！鋳物がありますよ。'})
})

export default routes;
