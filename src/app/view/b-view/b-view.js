import View from "../../../core/view/view";
import html from "./b-view.html";
import "./b-view.scss";
import Utils from "../../../core/utils";
import CView from "../c-view/c-view";

export default class BView extends View {

    constructor(text, data) {
        super(html);
        this.data = data;
        this.text = text;
        this.init();
    }


    async init() {
        const next = Utils.createButton();
        next.innerText= "Siguiente";
        
        this.viewElement.querySelector(".b-container").innerHTML = this.text;
        this.viewElement.querySelector(".b-container").innerHTML += `<br/> ${this.data}`;

        this.viewElement.querySelector(".b-container").appendChild(next);

        await Utils.addEventListener(next, 'click', () => {
            (new CView("Vista C", (Number(this.data) + 5))).start();
            this.end()
        });

    }

}