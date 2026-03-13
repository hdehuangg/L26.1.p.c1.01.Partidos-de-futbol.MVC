import Cl_mJuego from "../models/Cl_mJuego.js";
import Cl_vJuego from "../views/Cl_vJuego.js";
export default class Cl_cJuego {
    vJuego;
    pcp;
    constructor(pcp) {
        this.pcp = pcp;
        this.vJuego = new Cl_vJuego();
        this.vJuego.controlador = this;
        this.vJuego.mostrar();
    }
    aceptar() {
        let mJuego = new Cl_mJuego(this.vJuego.resultado);
        this.vJuego.ocultar();
        this.pcp.procesarJuego(mJuego);
    }
    cancelar() {
        this.vJuego.ocultar();
        this.pcp.procesarJuego(null);
    }
}
