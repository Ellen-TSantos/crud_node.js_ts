import mongoose from 'mongoose'

async function startConection (){

   const user = process.env.MONGO_USER
   const pass = process.env.MONGO_PASS
   await mongoose.connect(`mongodb+srv://${user}:${pass}@cluster0.zpycfgy.mongodb.net/?retryWrites=true&w=majority`)
   console.log('Mongo Connected')
}

async function  stopConection() {
    await mongoose.disconnect()
    console.log('Mongo disconneted')

}
export { startConection, stopConection }