import { Specification } from "../model/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "./ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        // irá chamar o construtor para criar criação do id 
        const specification = new Specification();

        // pega as informação que serão passadas para o objeto
        Object.assign(specification, {
            name,
            description,
            create_at: new Date(),
        });

        this.specifications.push(specification);
    }

}

export { SpecificationsRepository } 