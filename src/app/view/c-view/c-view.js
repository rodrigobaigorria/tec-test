import View from "../../../core/view/view";
import html from "./c-view.html";
import "./c-view.scss";
import Utils from "../../../core/utils";

export default class CView extends View {

    /**
     * Esta vista muestra un texto por 1 segundos y termina.
     */

    constructor(text) {
        super(html);
        this.text = text
        this.init();
    }


    async init() {
        // viewElement está definido en View, y es el contenedor de la vista.
        const reset = document.createElement("button");
        reset.innerText = "Reiniciar";
        const next = document.createElement("button");
        next.innerText = "Siguiente";
        this.viewElement.querySelector(".c-container").innerHTML = this.text;
        this.viewElement.querySelector(".c-container").appendChild(reset);
        this.viewElement.querySelector(".c-container").appendChild(next);

        await Utils.addEventListener(next, 'click', (e) => console.log(e));
        await Utils.waitForSeconds(5);

        this.end(); // <- Acá podría retornar una salida, pero esta vista no tiene salida.
    }

}