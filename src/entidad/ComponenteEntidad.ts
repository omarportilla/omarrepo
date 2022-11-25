export class ComponenteEntidad {
    public id: string;
    public nombre: string;
    public descripcion: string;
    public variantes:string[];
    
    constructor(i:string, n:string, d:string,v:string[]) {
      this.id=i;
      this.nombre=n;
      this.descripcion=d;
      this.variantes=v;
    }
  }
  
  export default ComponenteEntidad;