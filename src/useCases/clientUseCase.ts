import { IClientDto } from '../modules/dtos/clientDto';
import { ClientRepository } from '../repositories/clientRepository';
import { ClientRepositoryInMemory} from '../repositories/clientRepositoryInMemory';

class ClientUseCase {

    private clientRepository: any
    constructor(){
      const driver = process.env.DRIVER_CONNECTION
      if(driver === ' local '){
        this.clientRepository =  new ClientRepositoryInMemory()
      } else{
        this.clientRepository =  new ClientRepository()

      }
    }
    
  async  run ({name, email, bank, balance}: IClientDto) {

    try {
      const foundClient = await this.clientRepository.findByEmail(email);
      if (foundClient) {
        console.log('This email already exists!')
        throw ('This email already exists!')
      }
      return await this.clientRepository.save({ name, email, bank, balance })
    } catch (error: any ) {
      throw error
    }
  }
}
export {ClientUseCase}