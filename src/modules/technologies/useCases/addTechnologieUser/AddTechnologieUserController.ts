import { AddTechnologieUserUseCase } from './AddTechnologieUserUseCase';
import { Request, Response } from "express";

export class AddTechnologieUserController {
    async handle(req: Request, res: Response) {

        const { technologieId, userId } = req.body;

        const addTechnologieUserUseCase = new AddTechnologieUserUseCase();

        await addTechnologieUserUseCase.execute({ technologieId, userId });

        return res.status(201).send();
    }
}
