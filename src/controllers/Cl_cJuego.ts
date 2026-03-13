import Cl_mJuego from "../models/Cl_mJuego.js";
import Cl_vJuego from "../views/Cl_vJuego.js";

export default class Cl_cJuego {
    private vJuego: Cl_vJuego;
    private pcp: any;

    constructor(pcp: any) {
        this.pcp = pcp;
        this.vJuego = new Cl_vJuego();
        this.vJuego.controlador = this;
        this.vJuego.mostrar();
    }

    aceptar(): void {
        let mJuego = new Cl_mJuego(this.vJuego.resultado);
        this.vJuego.ocultar();
        this.pcp.procesarJuego(mJuego);
    }

    cancelar(): void {
        this.vJuego.ocultar();
        this.pcp.procesarJuego(null);
    }
}