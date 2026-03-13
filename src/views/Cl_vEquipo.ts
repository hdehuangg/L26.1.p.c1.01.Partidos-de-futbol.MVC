export default class Cl_vEquipo {
    private vista: HTMLElement | null;
    private btnAgregar: HTMLElement | null;
    private lblPorcentaje: HTMLElement | null;
    private lblTotalJuegos: HTMLElement | null;

    constructor() {
        this.vista = document.getElementById("mainView");
        this.btnAgregar = document.getElementById("btnAgregar");
        this.lblPorcentaje = document.getElementById("lblPorcentaje");
        this.lblTotalJuegos = document.getElementById("lblTotalJuegos");
    }

    mostrar(): void {
        if (this.vista) this.vista.style.display = "block";
    }

    ocultar(): void {
        if (this.vista) this.vista.style.display = "none";
    }

    reportar(porcentaje: number, total: number): void {
        if (this.lblPorcentaje) this.lblPorcentaje.innerHTML = porcentaje.toFixed(2);
        if (this.lblTotalJuegos) this.lblTotalJuegos.innerHTML = total.toString();
    }

    set controlador(c: any) {
        if (this.btnAgregar) this.btnAgregar.onclick = () => c.agregarJuego();
    }
}