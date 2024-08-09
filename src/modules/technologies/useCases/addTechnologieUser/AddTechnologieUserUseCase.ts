import { Technologie } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";
import { prisma } from "../../../../prisma/client";
import { addTechnologieUserDTO } from "../../dtos/addTechnologieUserDTO";

export class AddTechnologieUserUseCase {
    async execute({technologieId, userId}: addTechnologieUserDTO): Promise<void> {
        //Verificar se tecnologia existe
        const technologieExists = await prisma.technologie.findUnique({
            where: {
                id: technologieId
            }
        });

        if(!technologieExists) {
            throw new AppError("Technologie does not exists!");
        }

        // Verificar se o usuário existe

        const userExists = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if(!userExists) {
            throw new AppError("User does not exists!");
        }

        // Criar relação
        await prisma.userTechnologie.create ({
            data: {
                technologieId,
                userId
            }
        });
    }
}