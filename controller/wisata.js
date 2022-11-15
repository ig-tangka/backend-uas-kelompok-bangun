// import Wisata from '..model'

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