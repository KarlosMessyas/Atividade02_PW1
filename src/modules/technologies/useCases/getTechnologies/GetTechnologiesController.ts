import { GetTechnologiesUseCase } from './GetTechnologiesUseCase';
import { Request, Response } from "express";

export class GetTechnologiesController {
    async handle(req: Request, res: Response) {
        const getTechnologiesUseCase = new GetTechnologiesUseCase();

        const result = await getTechnologiesUseCase.execute();

        return res.status(201).json(result);
    }
}
