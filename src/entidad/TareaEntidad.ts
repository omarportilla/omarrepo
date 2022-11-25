import ComponenteEntidad from "./ComponenteEntidad";
export class TareaEntidad {
  public itemPriority: string;
  public itemCategory: string;
  public itemName: string;
  public componentes:ComponenteEntidad[];
  
  constructor(p: string, c:string, n:string, com:ComponenteEntidad[]) {
    this.itemPriority=p;
    this.itemCategory=c;
    this.itemName=n;
    this.componentes=com;
  }
}

export default TareaEntidad;
