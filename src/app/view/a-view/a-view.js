import View from "../../../core/view/view";
import html from "./a-view.html";
import "./a-view.scss";
import Utils from "../../../core/utils";
import BView from "../b-view/b-view";

export default class AView extends View {

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
        button.innerText= "Siguiente";
        this.viewElement.querySelector(".a-container").innerHTML = this.text;
        this.viewElement.querySelector(".a-container").appendChild(button);
        await Utils.waitForSeconds(5);

        this.end(); // <- Acá podría retornar una salida, pero esta vista no tiene salida.
    }

}