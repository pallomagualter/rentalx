import csvParse from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: Express.Multer.File){
        const stream = fs.createReadStream(file.path);
        const categories: IImportCategory[] = [];

        const parseFile = csvParse();

        stream.pipe(parseFile);

        parseFile.on("data", async (line) => {
            const [ name, description ] = line;
            categories.push({
                name,
                description,
            });
        });
    }

    execute(file: Express.Multer.File): void {
        const categories = this.loadCategories(file);
        console.log(categories)
    }

}

export { ImportCategoryUseCase }