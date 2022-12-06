import Wisata from "../model/wisataModel.js";
import path from "path";
import fs from "fs";

export const getWisata = async (req, res) => {
  try {
    const response = await Wisata.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getWisataById = async (req, res) => {
  try {
    const response = await Wisata.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.messagge);
  }
};

export const createWisata = async (req, res) => {
  if(req.files === null) return res.status(400).json({msg: "no file Uploaded"});
  const name = req.body.title;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = ['.png','.jpg','.jpeg'];
  
  if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg:"Invalid Images"});
  if(fileSize > 5000000) return res.status(422).json({msg: "Images must be less than 5 MB"});

  file.mv(` .public/images/${fileName}`, async(err)=>{
    if(err) return res.status(500).json({msg: err.message})
    try {
      await Wisata.create({
        nama: nama,
        deksripsi: deskripsi,
        img: fileName,
    });
      res.status(201).json({ msg: "Wisata Created" });
    } catch (error) {
      console.log(error.messagge);
    }
  })

  
};

export const updateWisata = async (req, res) => {
  const wisata = await Wisata.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!wisata) return res.status(404).json({ msg: "No Data Found"});

  let fileName = "";
  if (req.files === null){
    fileName = product.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.statsu(422).json({ msg: "Invalid Images"});
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB"});

    const filepath = `./public/images/$(wisata.image)`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message});
    });
  }
  const { nama, deskripsi, img} = req.body;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Wisata.update(
      { nama: nama, deskripsi: deskripsi, img: fileName },
      {
        where : {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Wisata Updated Successfuly"});
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteWisata = async (req, res) => {

  const wisata = await Wisata.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!wisata) return res.status(404).json({ msg: "No Data Found" });

  try {
    const filepath = `./public/iamges/${wisata.image}`;
    fs.unlinkSync(filepath);
    await Wisata.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Wisata Deleted" });
  } catch (error) {
    console.log(error.messagge);
  }
};
