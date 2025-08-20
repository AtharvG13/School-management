import express from "express";
import router from "./routes/Allroutes.js";
import { config } from "dotenv";
config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.use("/Api/v1/myschool", router);
