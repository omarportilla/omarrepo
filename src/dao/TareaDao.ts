import { Response } from "express";
import TareaEsquema from "../esquemas/TareaEsquema";
//https://refactorizando.blog/tutorial-mongoose-como-utilizar-mongoose/
class TareaDao {
  protected static async consultarTareas(res: Response): Promise<any> 
  {
    console.log("entro a consultar taras")
    const datos = await TareaEsquema.find().sort({ _id:-1 });
    console.log(datos)
    res.status(200).json(datos);
  }
  protected static async consultarTareaspapa(res: Response): Promise<any> 
  {
    const datos = await TareaEsquema.find({"componentes.nombre":"papa"},'itemName itemCategory').sort({ _id:-1 });
    res.status(200).json(datos);
  }

  protected static async crearTareaes(parametros: any, res:Response): Promise<any> {
    const existe = await TareaEsquema.findOne(parametros);
    if (existe) {
      res.status(400).json({respuesta: "El registro ya existe...."});
    } else {
      const objTarea=new TareaEsquema(parametros);
      console.log(objTarea);
      objTarea.save((miError,miObjeto)=>{
        if (miError) {
          res.status(400).json({respuesta:"No se puede crear la Tarea"});
        } else {
          res.status(200).json({respuesta:"Tarea creada exitosamente",codigo:miObjeto._id});
        }

      });
    }
   
  }

  protected static async eliminarTarea(identificador:any,res:Response):Promise<any>{
    //en esta line se hace una consulta
    //const existe = await TareaEsquema.findById(identificador);
    console.log("inicio borrado");
    const existe = await TareaEsquema.findById(identificador).exec();
    if (existe) {
      console.log("encontro que existe");
        TareaEsquema.findByIdAndDelete(identificador,(miError:any,MiObjeto:any)=>{
            if (miError) {
                res.status(400).json({respuesta:"No se puede Eliminar socio paila "})
            } else {
                res.status(200).json({respuesta:"Breve ya se Elimino todo bien ",eliminado:MiObjeto})
            }
        });
    } else {
        res.status(400).json({respuesta:"Paila el Tarea no existe yuca "})
    }
}


  protected static async actualizarTarea(identificador: any,parametros:any, res:Response): Promise<any> {
    //const existe = await TareaEsquema.findById(identificador);
    const existe = await TareaEsquema.findById(identificador).exec();
    if (existe) {
      TareaEsquema.findByIdAndUpdate(
        {_id:identificador},
        {$set:parametros},
        (miError:any,miObjeto:any)=>{
        if (miError) {
          res.status(400).json({respuesta:"No se puede actualizar la Tarea"});
        } else {
          res.status(200).json({respuesta:"Tarea actualizada exitosamente",actualizado:miObjeto._id});
        }

      });
    } else {
      res.status(400).json({respuesta:"No existe el Tarea"});
    }
  }
}
export default TareaDao;
