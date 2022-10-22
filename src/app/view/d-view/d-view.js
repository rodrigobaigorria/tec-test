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

    async waitForClick() {
        return new Promise((resolve) => {
            console.log('click');
            resolve();
          });
    }

    async waitFor5() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 5000);
          });
    }

    async init() {
        setTimeout(() => {
            alert("5 o Click");
        }, 5000);
        const click = Utils.createButton();
        click.innerText= "Click";
        const click5 = Utils.createButton();
        click5.innerText= "5 o Click";
        const click3 = Utils.createButton();
        click3.innerText= "3 y Click";
        const goBack = Utils.createButton();
        goBack.innerText= "Atrás";
        this.viewElement.querySelector(".d-container").innerHTML = this.text;
        this.viewElement.querySelector(".d-container").appendChild(click);
        this.viewElement.querySelector(".d-container").appendChild(click5);
        this.viewElement.querySelector(".d-container").appendChild(click3);
        this.viewElement.querySelector(".d-container").appendChild(goBack);

        await Utils.addEventListener(click, 'click', () => {
            Promise.all([
                this.waitForClick(),
                this.waitFor5()
            ]);
        });

        await Utils.addEventListener(click3, 'click', () => {
            setTimeout(() => {
                alert("3 y Click");
            }, 3000);
        });

        await Utils.addEventListener(click5, 'click', () => {
                alert("5 o Click");
        });

        await Utils.addEventListener(goBack, 'click', () => {
            (new BView("Vista B", 8)).start();
            this.end();
        });
    }

}