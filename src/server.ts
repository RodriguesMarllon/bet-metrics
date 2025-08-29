import createApp from "./app";
import chalk from "chalk";


const app = createApp();
const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server running at", chalk.blue(`http://localhost:${port}`));
})
