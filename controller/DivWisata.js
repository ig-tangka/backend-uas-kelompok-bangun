import DivWisata from "../model/divWisataModel.js";
import path from "path";

export const getDivWisata = async (req, res) => {
    try {
      const response = await DivWisata.findAll();
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const getDivWisataById = async (req, res) => {
    try {
      const response = await DivWisata.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      console.log(error.messagge);
    }
  };

  export const createDivWisata = async (req, res) => {
    if(req.files === null) 
        return res.status(400).json({msg: "no file Uploaded"});
    const { nama, deskripsi, divWisataId } = req.body;
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
        await DivWisata.create({
            nama: nama,
            deskripsi: deskripsi,
            image: fileName,
            url: url,
            divWisataId: divWisataId,
        });
        res.status(201).json({ msg: "Div Wisata Created" });
        } catch (error) {
        console.log(error.messagge);
        }
    });
  };