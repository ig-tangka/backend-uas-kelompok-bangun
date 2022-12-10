import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const { DataTypes } = Sequelize;

const Comment = db.define("commentSection", {
    Comment: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Comment;

(async() => {
  await db.sync();
})();
