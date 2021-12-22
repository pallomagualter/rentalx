//import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { ImportCategoryController } from "./ImporteCategoryController";


//const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController }
