import { Technologie } from "@prisma/client";
import { AppError } from "../../../../errors/AppErrors";
import { prisma } from "../../../../prisma/client";
import { CreateTechnologieDTO } from "../../dtos/CreateTechnologieDTO";

export class CreateTechnologieUseCase {
    async execute ({title, studied}: CreateTechnologieDTO): Promise<Technologie> {
        
        //Verificar existência da tecnologia

        if (!title) {
            throw new Error('title is required');
        }

        const technologieAlreadyExists = await prisma.technologie.findUnique({
            where: {
                title:title,
            },
        });

        if (technologieAlreadyExists) {
            throw new AppError("Technologie already exists!");
        }

        //Criar a tecnologia
        const technologie = await prisma.technologie.create({
            data: {
                title,
                studied
            }
        })
        return technologie;
    }
}