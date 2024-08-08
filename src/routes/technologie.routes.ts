import { Router } from "express";
import { CreateTechnologieController } from "../modules/technologies/useCases/createTechnologie/CreateTechnologieController";

const technologieRoutes = Router();

const createTechnologieController = new CreateTechnologieController();

technologieRoutes.post("/", createTechnologieController.handle);

export { technologieRoutes };
