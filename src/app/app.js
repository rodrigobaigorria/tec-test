import AView from "./view/a-view/a-view";

export default class App {

    constructor() {

    }

    async start() {
        const aView = await (new AView("Vista A")).start();
    }
}