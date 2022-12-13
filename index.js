import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import wisataRoute from "./routes/wisataRoute.js";
import commentSection from "./routes/commentSection.js";
import subWisataRoute from "./routes/subWisataRoute.js";
import divWisataRoute from "./routes/divWisataRoute.js";
import db from "./config/Database.js";

const app = express();

(async () =>{
    await db.sync();
})();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(wisataRoute);
app.use(commentSection);
app.use(subWisataRoute);
app.use(divWisataRoute);

app.listen(5000, () => console.log("Server running on port 5000"));