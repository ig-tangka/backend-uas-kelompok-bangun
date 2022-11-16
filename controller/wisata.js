import Wisata from "../model/wisataModel.js";

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
  try {
    await Wisata.create(req.body);
    res.status(201).json({ msg: "Wisata Created" });
  } catch (error) {
    console.log(error.messagge);
  }
};

export const updateWisata = async (req, res) => {
    try {
        await Wisata.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Wisata Updated'});
    } catch (error) {
        console.log(error.messagge);
    }
}

export const deleteWisata = async (req, res) => {
  try {
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
