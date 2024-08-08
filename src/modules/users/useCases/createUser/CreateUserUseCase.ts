import { AppError } from "../../../../errors/AppErrors";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
    async execute ({name, email}: CreateUserDTO) {
        
        //Verificar existência do usuário

        if (!email) {
            throw new Error('Email is required');
        }

        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email:email,
            },
        });

        if (userAlreadyExists) {
            throw new AppError("User already exists!");
        }

        //Criar usuário
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        })
        return user;
    }
}