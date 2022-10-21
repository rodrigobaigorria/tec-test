import View from "../../../core/view/view";
import html from "./d-view.html";
import "./d-view.scss";
import Utils from "../../../core/utils";

export default class DView extends View {

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
        const button = document.createElement("button");
        button.innerText= "Atrás";
        this.viewElement.querySelector(".d-container").innerHTML = this.text;
        this.viewElement.querySelector(".d-container").appendChild(button);

        await Utils.addEventListener(button, 'click', (e) => console.log(e));
        await Utils.waitForSeconds(100);

        this.end(); // <- Acá podría retornar una salida, pero esta vista no tiene salida.
    }

}