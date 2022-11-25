import { model, Schema } from "mongoose";
import ComponenteEntidad from "../entidad/ComponenteEntidad";


const ComponenteEsquema = new Schema<ComponenteEntidad>({
  id: {  type: String, required:true  },
  nombre: {   type: String,  required:true},
  descripcion: { type: String, required:true },
  variantes: {type: [String], required:true}
  
},{versionKey:false});
export default ComponenteEsquema;
//export default model("Coomponente",ComponenteEsquema,"Componente");