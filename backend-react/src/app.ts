import { Hono } from "hono";
import { cors } from "hono/cors";
import { projects } from "./data/projects";
import { Project } from "./types/ProjectType"


const app = new Hono();

app.use("/*", cors());

app.get("/habits", async (c) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return c.json({
    data: projects,
  });
});

app.post("/habits", async (c) => {
  const dataFromFrontend = await c.req.json<{ project: Project }>();

  projects.push(dataFromFrontend);

  return c.json(created, 201);
});

app.delete("/habits/:id", (c) => {
  const id = c.req.param("id") as ID;
  const index = habits.findIndex((h) => h.id === id);

  if (index === -1) {
    return c.json(undefined, 404);
  }

  habits.splice(index, 1);
  streaks.delete(id);
  return c.json(undefined, 204);
});

export default app;