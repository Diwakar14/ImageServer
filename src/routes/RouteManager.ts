import { Router } from "express";
import ImageRoutes from "./ImageRoutes";

class RouteManager {
    constructor(public router: Router) {

    }

    ConfigureRoutes() {
        new ImageRoutes(this.router)
            .registerRoutes();
    }
}

export default RouteManager;