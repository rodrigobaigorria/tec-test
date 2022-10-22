import View from "../../../core/view/view";
import html from "./c-view.html";
import "./c-view.scss";
import Utils from "../../../core/utils";
import AView from "../a-view/a-view";
import DView from "../d-view/d-view";

export default class CView extends View {

    constructor(text, data) {
        super(html);
        this.data = data;
        this.text = text;
        this.init();
    }


    async init() {
        const swap = Utils.createButton();
        swap.innerText = "Swap";
        swap.className = this.data < 10 ? "c-boton-pastel" : "c-boton-lila";
        const reset = Utils.createButton();
        reset.innerText = "Reiniciar";
        reset.className = this.data < 10 ? "c-boton-rosa" : "c-boton-verde" 
        const next = Utils.createButton();
        next.innerText = "Siguiente";
        next.className = this.data < 10 ? "c-boton-lila" : "c-boton-azul"

        const label = document.createElement("label");
        label.innerHTML = this.data;
        const container = this.viewElement.querySelector(".c-container");
        const newClass = this.data < 10 ? "c-estilo-1" : "c-estilo-2";
        container.classList.add(newClass);
        container.innerHTML = this.text;
        container.appendChild(label);
        container.appendChild(swap);
        container.appendChild(reset);
        container.appendChild(next);

        await Utils.addEventListener(swap, 'click', () => {
            if (container.classList.contains('c-estilo-1')) {
                container.classList.replace("c-estilo-1", "c-estilo-2");
                swap.className = "c-boton-lila";
                reset.className = "c-boton-verde"; 
                next.className = "c-boton-azul";
            } else {
                container.classList.replace("c-estilo-2", "c-estilo-1");
                swap.className = "c-boton-pastel";
                reset.className = "c-boton-rosa"; 
                next.className = "c-boton-lila";
            }
        });
        await Utils.addEventListener(next, 'click', () => {
            (new DView("Vista D")).start();
            this.end();
        });
        await Utils.addEventListener(reset, 'click', () => {
            (new AView("Vista A")).start();
            this.end();
        });

    
    }

}