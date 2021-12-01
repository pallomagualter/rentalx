import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationsRepository) {

    }

    execute({name, description}: IRequest): void {
        //antes de criar irá verificar se existe nome já cadastrado
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists){
            throw new Error("Specification already exists!");
        }

        this.specificationsRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationService };