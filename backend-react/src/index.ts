import app from "./app";
import { port } from "./config/index";

import { serve } from "@hono/node-server";

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port: 3002,
});
