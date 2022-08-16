import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";

export default async function handler(req, res) {
    const {method, cookies} = req;

    const token = cookies.token

    await dbConnect();

    if (method === "GET") {
        try {
            const products = await Product.find();
        } catch (error) {

        }
    }

}