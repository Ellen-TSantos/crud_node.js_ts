
import { Request, Response } from 'express';
import { ShowClientUseCase } from '../useCases/showClientUseCase';

class ShowClientController {

    async exec(_request: Request, response: Response) {
        try {
            const useCase = new ShowClientUseCase();
            const listClients = await useCase.run();
            return response.status(200).json(listClients)
        } catch (error: any) {
            return response.status(500).json(error)
        }
    }
}

export {ShowClientController }