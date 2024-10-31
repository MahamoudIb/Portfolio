import { Hono } from "hono";
import { createProject, getAllProjects, findOneProject, updateProject,  deleteProject} from "../service";
import { cors } from "hono/cors";
import { errorResponse } from "@/lib/error";
import type { Data } from "@/types";

export const ProjectController = () => {
const app = new Hono();

app.use("/*", cors());

app.get("/v3/projects", async (c) => {
    const query = c.req.query();
    const result = await getAllProjects()

    if(!result.success)
        return errorResponse(c, result.error.code, result.error.message)
    return c.json(result)
});

app.get("/v3/projects/:id", async (c) => {
    const id = c.req.param("id");
    const result = await findOneProject(id)

    if(!result.success)
        return errorResponse(c, result.error.code, result.error.message)
    return c.json(result)
});

app.post("/v3/projects", async (c) => {
  const dataFromFrontend = await c.req.json();
  const result = await createProject(dataFromFrontend)

  if(!result.success)
    return errorResponse(c, result.error.code, result.error.message)
  return c.json<Data<string>>(result, { status: 201 });
});

app.patch("/v3/projects/:id", async (c) => {
    const id = c.req.param("id");
    const dataFromFrontend = await c.req.json();
    const result = await updateProject(id, dataFromFrontend)
  
    if(!result.success)
      return errorResponse(c, result.error.code, result.error.message)
    return c.json(result)
  });

app.delete("/v3/projects/:id", async(c) => {
  const id = c.req.param("id");
  const result = await deleteProject(id);

  if(!result.success)
    return errorResponse(c, result.error.code, result.error.message)
  return c.json(result)
});

return app;
}