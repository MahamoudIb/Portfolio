import { Hono } from "hono";
import { cors } from "hono/cors";
import { ProjectController } from "./features/projects/controller";

const app = ProjectController();

export default app;