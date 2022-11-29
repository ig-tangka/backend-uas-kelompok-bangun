import express from "express";
import cors from "cors";
import wisataRoute from "./routes/wisataRoute.js";
import commentSection from "./routes/commentSection.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(wisataRoute);


app.listen(5000, () => console.log("Server running on port 5000"));
