import Product from "../../../models/Product";
import dbConnect from "../../../utilitis/mongo";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  //   const token = cookies.token;

  //   dbConnect function from mongo.js
  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    // if (!token || token !== process.env.token) {
    //   return res.status(401).json("Not authenticated!");
    // }

    try {
      const newproduct = Product(req.body);
      const product = await newproduct.save();
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
    // if (!token || token !== process.env.token) {
    //   return res.status(401).json("Not authenticated!");
    // }

    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
