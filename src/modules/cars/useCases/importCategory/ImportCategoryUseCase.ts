import csvParse from "csv-parse";
import fs from "fs";

//import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

// interface IImportCategory {
//     name: string;
//     description: string;
// }

class ImportCategoryUseCase {
    //constructor(private categoriesRepository: ICategoriesRepository) {}

    // loadCategories(file: Express.Multer.File){
        

    //   
    // }

    execute(file: Express.Multer.File): void {
        const stream = fs.createReadStream(file.path);
        //const categories: IImportCategory[] = [];

        const parseFile = csvParse();

        stream.pipe(parseFile);
        //const categories = this.loadCategories(file);
        parseFile.on("data", async (line) => {
            console.log(line);
        });
    }

}

export { ImportCategoryUseCase }