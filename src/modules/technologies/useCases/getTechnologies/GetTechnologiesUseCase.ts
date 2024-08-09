import { Technologie } from '@prisma/client';
import { prisma } from './../../../../prisma/client';


export class GetTechnologiesUseCase {
    async execute(): Promise<Technologie[]> {
        const technologies = await prisma.technologie.findMany({});
        return technologies;
    }
}