import SubWisata from "../model/subWisataModel.js";
import path from "path";
import fs from "fs";

export const getSubWisata = async (req, res) => {
    try {
      const response = await SubWisata.findAll();
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const getSubWisataById = async (req, res) => {
    try {
      const response = await SubWisata.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      console.log(error.messagge);
    }
  };

  export const createSubWisata = async (req, res) => {
    if(req.files === null) 
        return res.status(400).json({msg: "no file Uploaded"});
    const { nama, deskripsi, wisataId } = req.body;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = [".png", ".jpg", ".jpeg"];
    
    if(!allowedType.includes(ext.toLowerCase())) 
        return res.status(422).json({msg:"Invalid Images"});
    if(fileSize > 5000000) 
        return res.status(422).json({msg: "Images must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err) => {
        if (err) return res.status(500).json({msg: err.message })
        try {
        await SubWisata.create({
            nama: nama,
            deskripsi: deskripsi,
            image: fileName,
            url: url,
            wisataId: wisataId,
        });
        res.status(201).json({ msg: "Sub Wisata Created" });
        } catch (error) {
        console.log(error.messagge);
        }
    });
  };