import { CreateTechnologieUseCase } from './CreateTechnologieUseCase';
import { Request, Response } from "express";

export class CreateTechnologieController {
    async handle(req: Request, res: Response) {

        const { title, studied } = req.body;

        console.log('Title:', title);

        if (!title) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const createTechnologieUseCase = new CreateTechnologieUseCase();

        try {
            const result = await createTechnologieUseCase.execute({ title, studied });
            return res.status(201).json(result);
        } catch (error) {
            return res.status(400).json("Tecnologia já existe!");
        }
    }
}
