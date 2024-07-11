export default class Vendedor {
    constructor(cedula, montoVentas) {
        this.cedula = cedula;
        this.montoVentas = montoVentas;

    }
    set cedula (c){
        this._cedula = c;
    }
    get cedula () { return this._cedula; }
    set montoVentas (m){
        this._montoVentas = +m;
    }
    get montoVentas() { return this._montoVentas = +m }
    montoCobrar (){ return this.montoVentas * 0.2

    } 
}