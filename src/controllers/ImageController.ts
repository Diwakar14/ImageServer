
import { Request, Response } from 'express';
import ImageService from '../services/ImageService';
import Container, { Inject, Service } from 'typedi';
import 'reflect-metadata';
import DirectoryDetails from '../models/DirectoryDetails';


class ImageController {


    constructor(@Inject() public imageService: ImageService) {
    }

    public getAllImage = async (request: Request, response: Response) => {
        let images = await this.imageService.getImages();
        let img: DirectoryDetails[] = JSON.parse(images.toString());



        response.send(img[0]);
    }

    public getImage(request: Request, response: Response) {
        response.send("Image send");
    }
}

export default ImageController;
