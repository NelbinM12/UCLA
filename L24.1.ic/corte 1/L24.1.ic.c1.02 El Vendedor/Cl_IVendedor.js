export default class IVendedor{
    leerCedula(){
        return String ("ingrese la cedula")
}
    leerMontoVentas(){
        return float ("ingrese monto")
    }
    reporteVendedor(c, m, mc){
        return `
        <br> Cedula: ${c}
        <br> montoventas: ${m}
        <br> montoCobrar: ${mc}
        `
    }
}