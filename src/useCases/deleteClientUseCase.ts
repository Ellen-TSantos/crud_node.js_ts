import { ClientRepository } from '../repositories/clientRepository';
import { ClientRepositoryInMemory} from '../repositories/clientRepositoryInMemory';

class DeleteClientUseCase {

    private clientRepository: any
    constructor() {
      const driver = process.env.DRIVER_CONNECTION
      if(driver === ' local '){
        this.clientRepository =  new ClientRepositoryInMemory()
      } else{
        this.clientRepository =  new ClientRepository()
      }
    }
    
  async run(clientId: string) {
    try {
      await this.clientRepository.remove(clientId);
    } catch (error: any ) {
      throw error
    }
  }
}
export {DeleteClientUseCase}