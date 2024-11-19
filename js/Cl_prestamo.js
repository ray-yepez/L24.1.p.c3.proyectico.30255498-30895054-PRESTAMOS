export default class Cl_prestamo {
    constructor(cliente, codigo, prestamo, meses){
        this.cliente= cliente;
        this.codigo = codigo;
        this.prestamo = prestamo;
        this.meses = meses;
    }
    set cliente(n){
        this._cliente = n;
    }
    set codigo(c){
        this._codigo = c;
    }
    set prestamo(p){
        this._prestamo = p;
    }
    set meses(m){
        this._meses = m;
    }
    get cliente(){
        return this._cliente;
    }
    get codigo(){
        return this._codigo;
    }
    get prestamo(){
        return this._prestamo;
    }
    get meses(){
        return this._meses;
    }

}