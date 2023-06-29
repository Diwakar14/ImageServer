import { Router } from "express";
import ImageController from "../controllers/ImageController";
import Container, { Inject } from "typedi";
import ImageService from "../services/ImageService";


class ImageRoutes {

    imageController: ImageController;

    constructor(public router: Router) {
        let imageService = Container.get(ImageService);
        this.imageController = new ImageController(imageService);
    }

    registerRoutes() {
        this.router.get('/images', this.imageController.getAllImage);
        this.router.get('/image', this.imageController.getImage);
    }
}

export default ImageRoutes;