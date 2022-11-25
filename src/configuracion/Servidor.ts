//Tratar de configurar un backen que sirva para posgres mysql y mongo
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import ConexionDB from "./ConexionDB";
import tareaRuta from "../ruta/TareaRuta";

class Servidor {
    //definimos la variable para configuracion de todo lo que usamos en la api
    public app: express.Application;
    //creamos constructor
    constructor(){
        dotenv.config({path:"variables.env"});
        ConexionDB();
        this.app=express();
        this.iniciarconfig();
        this.iniciarRutas();
        console.log("paso por el constructor ");
    };

    public iniciarconfig(){
        this.app.set("PORT",process.env.PORT);
        this.app.use (cors()) ;
        this.app.use(morgan("dev"));
        this.app.use(express.json({limit:"50MB"}));
        this.app.use(express.urlencoded({extended:true}));

    };
    public iniciarRutas(){
        this.app.use("/backend/v1",tareaRuta);
        

    };
    public iniciarServidor(){
        this.app.listen(this.app.get("PORT"),()=> {
                console.log("Backend listo en el puerto:",this.app.get("PORT"));
                
        });
    
    }

};

export default Servidor;




