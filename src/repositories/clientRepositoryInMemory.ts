import  {clients}  from '../infra/db/data'
import { IClientDto } from '../modules/dtos/clientDto';

class ClientRepositoryInMemory {

  findByEmail(email:string) {
    return clients.find(client => client.email === email);
  }
  save(newClient : IClientDto) {
    try {
      const clientSize = clients.length
      const lastClient = clients[clientSize - 1]
      let nextId = lastClient.id
      if(!nextId){
        throw  new Error ('Missing Client id')
      }
      clients.push({ id: ++nextId, ...newClient })
      return clients;
    } catch (error) {
      throw error
    }
  }
}

export { ClientRepositoryInMemory };
