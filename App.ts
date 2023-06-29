import express from "express";
import RouteManager from "./src/routes/RouteManager";


class App {
	public expressApp;
	constructor() {
		this.expressApp = express();
		this.config();
	}

	config() {
		new RouteManager(this.expressApp)
			.ConfigureRoutes();
	}
}


export default new App();




