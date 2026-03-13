export default class Cl_vJuego {
    vista;
    inResultado;
    btnAceptar;
    btnCancelar;
    constructor() {
        this.vista = document.getElementById("secView");
        this.inResultado = document.getElementById("inResultado");
        this.btnAceptar = document.getElementById("btnAceptar");
        this.btnCancelar = document.getElementById("btnCancelar");
    }
    get resultado() { return Number(this.inResultado?.value); }
    mostrar() { if (this.vista)
        this.vista.style.display = "block"; }
    ocultar() { if (this.vista)
        this.vista.style.display = "none"; }
    set controlador(c) {
        if (this.btnAceptar)
            this.btnAceptar.onclick = () => c.aceptar();
        if (this.btnCancelar)
            this.btnCancelar.onclick = () => c.cancelar();
    }
}
