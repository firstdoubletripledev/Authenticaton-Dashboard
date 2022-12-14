import Product from "../models/product";

export const createProduct = async (req, res) => {
    const data = req.body;
    const newProduct = new Product(data);
    try {
        console.log("saving...");
        await newProduct.save();
        console.log("saved");
        return res.status(201).json({});
    }
    catch (err) {
        return res.status(500).send(err);
    }
}

export const readProducts = async (req, res) => {
    console.log("readProducts");
    try {
        const products = await Product.find();
        return res.json({ products: products });
    }
    catch (err) {
        return res.status(500).send(err);
    }
}

export const readProduct = async (req, res) => {
    const { _id } = req.body;
    console.log("readProduct", _id);
    try {
        const product = await Product.findOne({ _id: _id });
        return res.json({ product: product });
    }
    catch (err) {
        return res.status(500).send(err);
    }
}

export const updateProduct = async (req, res) => {
    const data = req.body;
    console.log("updateProduct", data);
    try {
        await Product.findOneAndReplace({ _id: data._id }, data);
        return res.json({});
    }
    catch (err) {
        return res.status(500).send(err);
    }
}

export const deleteProduct = async (req, res) => {
    const { _id } = req.body;
    console.log("deleteProduct", _id);
    try {
        await Product.findOneAndDelete({ _id: _id });
        return res.json({});
    }
    catch (err) {
        return res.status(500).send(err);
    }
}