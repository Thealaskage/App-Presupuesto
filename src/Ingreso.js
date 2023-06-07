class Ingreso extends Dato{
    static contIngresos = 0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this.id = ++Ingreso.contIngresos;
    }
    get getId(){
        return this.id;
    }
    
}