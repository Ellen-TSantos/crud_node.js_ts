
import ClientModel from '../models/client'
import { IClientDto } from '../modules/dtos/clientDto'

class ClientRepository {

  private clientModel: any
  constructor() {
    this.clientModel = ClientModel
 }

  async findByEmail(email: string) {
    try {
      const foundClient = await this.clientModel.findOne({ email });
      return foundClient
    } catch (error) {
      throw error
    }
 }

  async findAll() {
    try {
      const clientList = await this.clientModel.find({});
      return clientList
    } catch (error) {
      throw error
    }
  }


  async save(newClient: IClientDto) {
    try {
      const createdClient = await this.clientModel.create(newClient)
      return createdClient;
    } catch (error) {
      throw error
    }
  }

  async remove(userId:string) {
    try {
     return await this.clientModel.deleteOne({_id:userId})
    } catch (error) {
      throw error
    }
  }

  async update( data:IClientDto ) {
    try {
     return await this.clientModel.updateOne(data)
    } catch (error) {
      throw error
    }
  }
}

export { ClientRepository }
