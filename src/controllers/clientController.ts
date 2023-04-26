import { Request, Response } from 'express';
import BadRequestError from '../modules/errors/badRequest';
import { ClientUseCase } from '../useCases/clientUseCase';

class ClientController {

    async exec(request: Request, response: Response) {
        try {
            const newClient = request.body
            const useCase = new ClientUseCase();
            console.log(newClient)

            if (!newClient.name || !newClient.email || !newClient.bank || !newClient.balance ) {
                console.log('Lack of parameters! ')
                return response.status(400).send('Lack of parameters! ')
            }
            const listClients = await useCase.run(newClient)
            return response.status(200).json(listClients)
        } catch (error: any) {
            switch (error.constructor) {
                case BadRequestError:
                    return response.status(400).send('Existing data!');
                default:
                    return response.status(500).json(error)
            }
        }
    }
}

export { ClientController }