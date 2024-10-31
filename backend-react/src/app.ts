import { Hono } from "hono";
import { cors } from "hono/cors";
import { ProjectController } from "./features/projects/controller";

export const makeApp = (
) => {
  const app = new Hono();
  app.use("/*", cors());

  ProjectController();

  return app;
};

const app = makeApp();

export default app;