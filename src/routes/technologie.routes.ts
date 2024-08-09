import { GetTechnologiesController } from './../modules/technologies/useCases/getTechnologies/GetTechnologiesController';
import { AddTechnologieUserController } from './../modules/technologies/useCases/addTechnologieUser/AddTechnologieUserController';
import { Router } from "express";
import { CreateTechnologieController } from "../modules/technologies/useCases/createTechnologie/CreateTechnologieController";

const technologieRoutes = Router();

const createTechnologieController = new CreateTechnologieController();
const getTechnologiesController = new GetTechnologiesController();
const addTechnologieUserController = new AddTechnologieUserController();

technologieRoutes.post("/", createTechnologieController.handle);
technologieRoutes.get("/search", getTechnologiesController.handle);
technologieRoutes.post("/addTechnologie", addTechnologieUserController.handle);

export { technologieRoutes };
