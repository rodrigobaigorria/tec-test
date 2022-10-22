import View from "../../../core/view/view";
import html from "./d-view.html";
import "./d-view.scss";
import Utils from "../../../core/utils";
import BView from "../b-view/b-view";

export default class DView extends View {

    constructor(text) {
        super(html);
        this.text = text
        this.init();
    }


    async init() {
        const button = document.createElement("button");
        button.innerText= "Atrás";
        this.viewElement.querySelector(".d-container").innerHTML = this.text;
        this.viewElement.querySelector(".d-container").appendChild(button);

        await Utils.addEventListener(button, 'click', () => {
            (new BView("Vista B", 8)).start();
            this.end();
        });
    }

}