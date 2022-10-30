import { Application } from "express";
import { Express } from "./Express";

class App {
	_express: Express
	constructor(){
		this._express = new Express()
	}
    public loadServer (): void {
		this._express.init();
	}

}

export default new App();