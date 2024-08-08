import { Router } from "express";
import { userRoutes } from "./user.routes";
import { technologieRoutes } from "./technologie.routes";

const routes = Router();

routes.use("/users", userRoutes); 
routes.use("/technologies", technologieRoutes);

export { routes }
