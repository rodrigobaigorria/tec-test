import AView from "./view/a-view/a-view";
import BView from "./view/b-view/b-view";
import CView from "./view/c-view/c-view";
import DView from "./view/d-view/d-view";

export default class App {

    constructor() {

    }

    async start() {
        await (new AView("Vista A")).start();
        await (new BView("Vista B")).start();
        await (new CView("Vista C")).start();
        await (new DView("Vista D")).start();
    }
}