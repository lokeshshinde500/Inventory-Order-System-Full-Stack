import orderModel from "../models/orderModel.js";
import productModel from "../models/productModel.js";

// place order
export const placeOrder = async (req, res) => {
  try {
    const { customerName, contactNumber, address, products } = req.body;

    const productIds = products.map((p) => p.product);

    const existingProducts = await productModel.find({
      _id: { $in: productIds },
    });

    let totalAmount = 0;
    products.map(async (item) => {
      const product = existingProducts.find(
        (p) => p._id.toString() === item.product
      );

      if (!product) {
        return res.status(400).json({ message: "Product not found!" });
      }

      if (product.stock < item.quantity) {
        return res
          .status(400)
          .json({ message: `Insufficient stock for ${product.productName}.` });
      }

      totalAmount += product.price * item.quantity;

      // Reduce the stock
      product.stock -= item.quantity;
      await product.save();
    });

    const newOrder = {
      customerName,
      contactNumber,
      address,
      products,
      totalAmount,
      created_by: req.user.id,
    };

    const order = await orderModel.create(newOrder);

    return res.status(200).json({
      message: "Order placed successfully.",
      order,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error!",
      success: false,
      error: error.message,
    });
  }
};

// view my orders
export const myOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ created_by: req.user.id });

    if (!orders) {
      return res.status(404).json({
        message: "No orders founds!",
        success: false,
      });
    }
    return res.status(500).json({
      orders,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error!",
      success: false,
      error: error.message,
    });
  }
};
