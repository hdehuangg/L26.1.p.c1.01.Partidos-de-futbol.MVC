export default class Cl_vJuego {
    private vista: HTMLElement | null;
    private inResultado: HTMLInputElement | null;
    private btnAceptar: HTMLElement | null;
    private btnCancelar: HTMLElement | null;

    constructor() {
        this.vista = document.getElementById("secView");
        this.inResultado = document.getElementById("inResultado") as HTMLInputElement;
        this.btnAceptar = document.getElementById("btnAceptar");
        this.btnCancelar = document.getElementById("btnCancelar");
    }

    get resultado(): number {
        return Number(this.inResultado?.value);
    }

    mostrar(): void {
        if (this.vista) this.vista.style.display = "block";
    }

    ocultar(): void {
        if (this.vista) this.vista.style.display = "none";
    }

    set controlador(c: any) {
        if (this.btnAceptar) this.btnAceptar.onclick = () => c.aceptar();
        if (this.btnCancelar) this.btnCancelar.onclick = () => c.cancelar();
    }
}