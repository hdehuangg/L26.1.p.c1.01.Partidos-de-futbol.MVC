export default class Cl_mEquipo {
    cntPartidos;
    cntGanados;
    constructor() {
        this.cntPartidos = 0;
        this.cntGanados = 0;
    }
    procesarJuego(j) {
        this.cntPartidos++;
        if (j.resultado === 1)
            this.cntGanados++;
    }
    porcentajeGanados() {
        return this.cntPartidos === 0 ? 0 : (this.cntGanados / this.cntPartidos) * 100;
    }
    obtenerTotalJuegos() {
        return this.cntPartidos;
    }
}
