import { Sequelize } from "sequelize";
import db from '../config/Database.js'

const { DataTypes } = Sequelize;

const Wisata = db.define('wisata', {
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    img: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Wisata;

(async() => {
    await db.sync();
});