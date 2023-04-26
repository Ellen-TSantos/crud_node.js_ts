import { Request, Response } from 'express';
import { DeleteClientUseCase } from '../useCases/deleteClientUseCase';

class DeleteClientController {

    async exec(request: Request, response: Response) {
        try {
            const userId = request.params.id;
            const useCase = new DeleteClientUseCase();
             await useCase.run(userId);
            return response.status(200).send('successfully deleted data!')
        } catch (error: any) {
            return response.status(500).json(error)
        }
    }
}

export { DeleteClientController }