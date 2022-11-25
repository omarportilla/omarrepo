import { connect } from "mongoose";


const ConexionDB = () => {
  const URL = String(process.env.DB_MONGO);
  //recuerde que debe entrar mongo db atlas crear su cuenta un cluster y usuario y generar una bd llamada basetareas
 // const URL = String("mongodb+srv://omar:amoaliser2022@cluster0.efhikp9.mongodb.net/basetareas?retryWrites=true&w=majority");
  
 /* const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://omar:amoaliser2022@cluster0.efhikp9.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect().;*/

  connect(URL)
    .then(()=>{
      console.log("Estas conectado a mondoDB",process.env.DB_MONGO);
    })
    .catch((miError) => {
      console.log("NO encuentro a mongo", miError);
    });
};

export default ConexionDB;
//mongodb+srv://omar:amoaliser2022@cluster0.efhikp9.mongodb.net/test
//mongodb+srv://omar:amoaliser2022@cluster0.efhikp9.mongodb.net/?retryWrites=true&w=majority