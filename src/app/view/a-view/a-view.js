import View from "../../../core/view/view";
import html from "./a-view.html";
import "./a-view.scss";
import Utils from "../../../core/utils";
import BView from "../b-view/b-view";

export default class AView extends View {

    constructor(text) {
        super(html);
        this.text = text
        this.init();
    }

    async init() {
        const next = Utils.createButton();
        next.innerText = "Siguiente";
        const input = document.createElement("input");
        input.type = "number";
        input.className = "a-input";         this.viewElement.querySelector(".a-container").innerHTML = this.text;
        this.viewElement.querySelector(".a-container").appendChild(input);
        this.viewElement.querySelector(".a-container").appendChild(next);
        await Utils.onClick(next, () => {
            (new BView("Vista B", input.value)).start();
            this.end(input.value);
        });
    }

}