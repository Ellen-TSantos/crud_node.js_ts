import {Router} from 'express'
import {ClientController} from '../controllers/clientController'
import {ShowClientController} from '../controllers/showClientController'
import {DeleteClientController} from '../controllers/deleteclientcontroller'
import {UpdateClientController} from '../controllers/updateClientController'

const routes = Router();
const clientController = new ClientController();
const showClientController = new ShowClientController();
const deleteClientController = new DeleteClientController();
const updateClientController = new UpdateClientController();


routes.post('/client/new', clientController.exec)
routes.get('/clients', showClientController.exec)
routes.delete('/client/:id', deleteClientController.exec)
routes.put('/client/:id', updateClientController.exec)

export default routes