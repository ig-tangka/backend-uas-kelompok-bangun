import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Wisata from "../model/wisataModel.js";

const { DataTypes } = Sequelize;

const subWisata = db.define("subWisata", {
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
}, {
    freezeTableName: true
});

Wisata.hasMany(subWisata);

subWisata.belongsTo(Wisata, {
    foreignKey: "wisataId",
});

export default subWisata;


