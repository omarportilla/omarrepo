import { Request, Response } from "express";
import TareaDao from "../dao/TareaDao";

class TareaControlador extends TareaDao {
  
  public consulta(req: Request, res: Response) {
    TareaControlador.consultarTareas(res);
  }
  public consultapapa(req: Request, res: Response) {
    TareaControlador.consultarTareaspapa(res);
  }

  public crear(req: Request, res: Response) {
    TareaControlador.crearTareaes(req.body,res);
  }
  public eliminar(req: Request, res: Response) {
    TareaControlador.eliminarTarea(req.params.codiguito,res);
  }

  public actualizar(req: Request, res: Response) {
    TareaControlador.actualizarTarea(req.params.codiguito,req.body,res);
  }
}

const tareaControlador1 = new TareaControlador();
export default tareaControlador1;
