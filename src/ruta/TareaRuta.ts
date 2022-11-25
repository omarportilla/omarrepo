import { Router } from "express";
import TareaControlador1 from "../controlador/TareaControlador";
class TareaRuta{
    public rutaApi:Router;
    constructor(){
        this.rutaApi=Router();
        this.configurarRutas();
    };
    public configurarRutas(){
        this.rutaApi.get("/listado",TareaControlador1.consulta);
        this.rutaApi.get("/listapapa",TareaControlador1.consultapapa);
        this.rutaApi.post("/crear",TareaControlador1.crear);
        this.rutaApi.delete("/eliminar/:codiguito",TareaControlador1.eliminar);
        this.rutaApi.put("/actualizar/:codiguito",TareaControlador1.actualizar);
    };
};

const tareaRuta = new TareaRuta();
export default tareaRuta.rutaApi;
