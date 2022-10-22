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
        const reset = Utils.createButton();
        reset.innerText = "Reiniciar";
        const next = Utils.createButton();
        next.innerText = "Siguiente";
        this.viewElement.querySelector(".c-container").innerHTML = this.text;
        this.viewElement.querySelector(".c-container").innerHTML += `<br/> ${this.data}`;

        this.viewElement.querySelector(".c-container").appendChild(reset);
        this.viewElement.querySelector(".c-container").appendChild(next);

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