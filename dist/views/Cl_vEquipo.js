export default class Cl_vEquipo {
    vista;
    btnAgregar;
    lblPorcentaje;
    lblTotalJuegos;
    constructor() {
        this.vista = document.getElementById("mainView");
        this.btnAgregar = document.getElementById("btnAgregar");
        this.lblPorcentaje = document.getElementById("lblPorcentaje");
        this.lblTotalJuegos = document.getElementById("lblTotalJuegos");
    }
    mostrar() { if (this.vista)
        this.vista.style.display = "block"; }
    ocultar() { if (this.vista)
        this.vista.style.display = "none"; }
    reportar(porcentaje, total) {
        if (this.lblPorcentaje)
            this.lblPorcentaje.innerHTML = porcentaje.toFixed(2);
        if (this.lblTotalJuegos)
            this.lblTotalJuegos.innerHTML = total.toString();
    }
    set controlador(c) {
        if (this.btnAgregar)
            this.btnAgregar.onclick = () => c.agregarJuego();
    }
}
