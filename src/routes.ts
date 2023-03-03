import { Router } from 'express'
import { UserController } from './controllers/userControllers'

const routes = Router()
const userController = new UserController()

routes.get('/users', userController.listarUsuario)

routes.post('/users', userController.criarUsuario)

export { routes }