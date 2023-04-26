import {IClientDto} from '../modules/dtos/clientDto'
import { ClientRepository } from '../repositories/clientRepository';
import { ClientRepositoryInMemory} from '../repositories/clientRepositoryInMemory';

class UpdateClientUseCase {

    private clientRepository: any
    constructor() {
      const driver = process.env.DRIVER_CONNECTION
      if(driver === ' local '){
        this.clientRepository =  new ClientRepositoryInMemory()
      } else{
        this.clientRepository =  new ClientRepository()
      }
    }
    
  async run(data: IClientDto) {
    try {
       const updatedClient = await this.clientRepository.update(data);
       return updatedClient
    } catch (error: any ) {
      throw error
    }
  }
}
export {UpdateClientUseCase};