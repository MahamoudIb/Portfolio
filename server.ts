import { serve } from "@hono/node-server";
import { Hono, HonoRequest } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "@hono/node-server/serve-static";
import fs from "node:fs/promises";

const app = new Hono();

app.use("/*", cors());

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/data", async (c) => {
    const data = await fs.readFile("./projects.json", "utf-8");
    const dataAsJson = JSON.parse(data);
    return c.json(dataAsJson);
});

app.post("/update", async (c) => {
    const data = await c.req.json();
    const formattedData = JSON.stringify(data, null, 2);
    await fs.writeFile('projects.json', formattedData);
    return c.json(formattedData, { status: 201 });
  });

const port = 3999;

console.log("serveren kjører")

serve({
    fetch: app.fetch,
    port,
});
