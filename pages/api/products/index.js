import Product from "../../../models/Product";
import dbConnect from "../../../utilitis/mongo";

export default async function handler(req, res) {
  const { method, cookies } = req;
  const token = cookies.token;
  //   dbConnect function from mongo.js

  dbConnect();

  // get product
  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  // create product
  if (method === "POST") {
    if (!token && token !== process.env.token) {
      return res.status(401).json("Not authenticated!");
    }

    try {
      const newProducts = new Product(req.body);
      const products = await newProducts.save();
      res.status(200).json(products);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
