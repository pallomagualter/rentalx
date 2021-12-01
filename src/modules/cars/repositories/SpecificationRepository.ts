import { Specification } from "../model/Specification";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "./ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {
    private specifications: Specification[]

    create({ name, description }: ICreateSpecificationDTO): void {
        throw new Error("Method not implemented.");
    }

}

export { SpecificationsRepository } 