import { model, Schema } from "mongoose";
import TareaEntidad from "../entidad/TareaEntidad";
import ComponenteEntidad from "../entidad/ComponenteEntidad";
import CoomponenteEsquema from "./ComponenteEsquema";
import ComponenteEsquema from "./ComponenteEsquema";

const TareaEsquema = new Schema<TareaEntidad>({
  itemPriority: {  type: String, required:true  },
  itemCategory: {   type: String,  required:true},
  itemName: { type: String, required:true },
  componentes: {type: [ComponenteEsquema], required:true}
  
},{versionKey:false});

export default model("Tarea",TareaEsquema,"Tarea");