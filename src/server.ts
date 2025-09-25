import express from "express";
import artistRoutes from "./routes/artistsRoute";
import logger from "./middlewares/loggerMiddleware";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(logger);
app.use("/artists", artistRoutes);
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
