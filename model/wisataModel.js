import { Sequelize } from "sequelize";
import db from '../config/Database.js'

const { DataTypes } = Sequelize;

const Wisata = db.define('wisata', {
    nama: DataTypes.STRING,
    deskripsi: DataTypes.VARCHAR,
    img: DataTypes.VARCHAR,
}, {
    freezeTableName: true
});

export default Wisata;

(async() => {
    await db.sync();
});