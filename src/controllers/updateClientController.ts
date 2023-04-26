
import { Request, Response } from 'express';
import { UpdateClientUseCase } from '../useCases/updateClientUseCase';

class UpdateClientController {

    async exec(request: Request, response: Response) {
        try {
            const {body, params} = request
            const useCase = new UpdateClientUseCase();
             await useCase.run({ ...body, id: params.id});
            return response.status(200).send('Data updated successfully!')
        } catch (error: any) {
            return response.status(500).json(error)
        }
    }
}

export { UpdateClientController }