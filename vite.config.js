import { defineConfig } from "vite";

const base = process.env.VITE_BASE_PATH || "/";

function mockApi() {
  return {
    name: "mock-api",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || "";

        if (req.method === "GET" && url === "/api/dashboard") {
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              ok: true,
              generatedAt: new Date().toISOString(),
              pacing: 97,
              ctr: 0.92,
              cpl: 143,
              pipeline: 312,
              risk: "low",
            })
          );
          return;
        }

        if (req.method === "POST" && url === "/api/brief") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk;
          });
          req.on("end", () => {
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                ok: true,
                message: "Brief received by mock API.",
                brief: body ? JSON.parse(body) : null,
              })
            );
          });
          return;
        }

        if (req.method === "POST" && url === "/api/approve") {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ ok: true, status: "queued_for_safe_execution" }));
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  base,
  plugins: [mockApi()],
});
