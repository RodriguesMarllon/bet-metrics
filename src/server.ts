// server.ts
import createApp from "./app";
import chalk from "chalk";

const startServer = async () => {
  const app = createApp();
  const port = Number(process.env.PORT) || 3333;

  try {
    await app.listen({ port: port, host: '0.0.0.0' });
    console.log("Server running at", chalk.blue(`http://localhost:${port}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();