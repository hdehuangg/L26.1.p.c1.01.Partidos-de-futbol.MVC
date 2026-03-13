import Cl_mJuego from "./Cl_mJuego.js";
export default class Cl_mEquipo {
    private cntPartidos: number;
    private cntGanados: number;
    constructor() {
        this.cntPartidos = 0;
        this.cntGanados = 0;
    }
    procesarJuego(j: Cl_mJuego): void {
        this.cntPartidos++;
        if (j.resultado === 1) this.cntGanados++;
    }
    porcentajeGanados(): number {
        return this.cntPartidos === 0 ? 0 : (this.cntGanados / this.cntPartidos) * 100;
    }
    obtenerTotalJuegos(): number {
        return this.cntPartidos;
    }
}