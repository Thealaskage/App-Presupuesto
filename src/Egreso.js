class Egreso extends Dato{
    static contEgresos = 0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this.id = ++Egreso.contEgresos;
    }
    get getId(){
        return this.id;
    }
    
}