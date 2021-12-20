import { Request, Response } from "express";



class ImportCategoryController {

    handle(request: Request, response: Response): Response {
        const { file } = request;
        console.log(file);
        
        return response.send();
    }
}

export { ImportCategoryController }