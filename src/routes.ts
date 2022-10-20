import { Router, Response, Request, Express } from "express";
const tenant = {
    name: 'test',
    id: 'some_random_id'
}
export const router = (server: Express) => {
    server.use(`/${tenant.name}`, routes)
};
const routes = Router()
routes.get('/test', (req, res) => {
    res.send('hello worlddd')
})
