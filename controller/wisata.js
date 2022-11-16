import Wisata from '../model/wisataModel.js'

export const getWisata = async (req,res) => {
    try {
        const response = await Wisata.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getWisataById = async (req, res) => {
    try {
        // SELECT * FROM products WHERE id = ?
        const response = await Product.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.messagge);
    }
}

export const createWisata = async (req, res) => {
    try {
        // INSERT
        await Product.create(req.body);
        res.status(201).json({ msg: 'Product Created'})
    } catch (error) {
        console.log(error.messagge);
    }
}

export const updateWisata = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Product Updated'});
    } catch (error) {
        console.log(error.messagge);
    }
}

export const deleteWisata = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ msg: 'Product Deleted'})
    } catch (error) {
        console.log(error.messagge);
    }
}