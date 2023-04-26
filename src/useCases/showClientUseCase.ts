import { ClientRepository } from '../repositories/clientRepository';
import { ClientRepositoryInMemory} from '../repositories/clientRepositoryInMemory';

class ShowClientUseCase {

    private clientRepository: any
    constructor(){
      const driver = process.env.DRIVER_CONNECTION
      if(driver === ' local '){
        this.clientRepository =  new ClientRepositoryInMemory()
      } else{
        this.clientRepository =  new ClientRepository()
      }
    }
    
  async run() {
    try {
      const clientList = await this.clientRepository.findAll();
      return clientList
    } catch (error: any ) {
      throw error
    }
  }
}
export {ShowClientUseCase}