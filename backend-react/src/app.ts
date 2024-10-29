import { Hono } from "hono";
import { cors } from "hono/cors";
import { projects } from "./data/projects";
import { Project } from "./types/ProjectType"


const app = new Hono();

app.use("/*", cors());

app.get("/v3/projects", async (c) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  return c.json({
    data: projects,
  });
});

app.post("/v3/projects", async (c) => {
  const dataFromFrontend = await c.req.json();

  const created : Project = dataFromFrontend
  created.publishedAt = new Date();
  created.id = crypto.randomUUID();

  projects.push(created);
  console.log(created)

  return c.json(created, 201);
});

app.delete("/v3/projects/:id", (c) => {
  const id = c.req.param("id");
  const index = projects.findIndex((h) => h.id === id);

  if (index === -1) {
    return c.json(undefined, 404);
  }
  projects.splice(index, 1);
  return c.json(undefined, 204);
});

export default app;