import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const { DataTypes } = Sequelize;

const Comment = db.define("commentSection", {
    nama: DataTypes.STRING,
    Comment: DataTypes.STRING,
    img: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Comment;

(async() => {
  await db.sync();
})();
