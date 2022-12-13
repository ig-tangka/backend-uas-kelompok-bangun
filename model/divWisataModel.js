import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Wisata from "../model/wisataModel.js";

const { DataTypes } = Sequelize;

const divWisata = db.define("divWisata", {
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
}, {
    freezeTableName: true
});

Wisata.hasMany(divWisata);

divWisata.belongsTo(Wisata, {
    foreignKey: "divWisataId",
});

export default divWisata;


