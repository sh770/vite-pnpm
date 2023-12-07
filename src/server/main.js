import express from "express";
import ViteExpress from "vite-express";

const app = express();
ViteExpress.config({ mode: "production" });

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);

// app.get("/message", (_, res) => res.send("Hello from express!"));

// ViteExpress.listen(app, 5002, () => console.log("Server is listening..."));
