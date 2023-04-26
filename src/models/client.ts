import { Schema, model } from "mongoose";

const ClientModel =  new Schema({
  
    name: {
        type:'String',
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    bank:{
        type: String,
        required: true
    },
    balance:{
        type: Number,
        required: true
    }
  
}, { timestamps: true })


export default model( 'Client', ClientModel)







