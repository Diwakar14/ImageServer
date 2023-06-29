import { Service } from "typedi";
import fs from 'fs/promises';

@Service()
class ImageService {

    constructor() {
    }

    public async getImages() {
        return await fs.readFile('./source/result.json')
    }
}

export default ImageService;