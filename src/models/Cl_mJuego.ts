export default class Cl_mJuego {
    private _resultado: number;
    constructor(resultado: number) {
        this._resultado = resultado;
    }
    set resultado(r: number) { this._resultado = r; }
    get resultado(): number { return this._resultado; }
}