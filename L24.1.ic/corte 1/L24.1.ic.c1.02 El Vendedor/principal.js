/** Se tienen los siguientes datos de un vendedor 
 * cedula, monto de ventas. Se desea conocer el monto a cobrar del vendedor
 * que es una multiplicacion de sus ventas con su comision. El programa debe mostrar un reporte
 * donde se muestre la cedula, monto de ventas y el monto a cobrar */

import Cl_IVendedor from "./Cl_IVendedor.js";
import Cl_Vendedor from "./Cl_Vendedor.js";
let iVende = new Cl_IVendedor();
    c = iVende.leerCedula(),
    m = iVende.leerMontoVentas(),

    vende = new Cl_Vendedor(c, m,)
    salida = document.getElementById("salidad")
    salidad.innerHTML = iVende.reporteVendedor(vende.cedula,vende.montoVentas,vende.MontoCobrar())