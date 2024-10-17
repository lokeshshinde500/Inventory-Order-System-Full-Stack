import orderModel from "../models/orderModel.js";
import productModel from "../models/productModel.js";

// 1. create or add new product
export const createProduct = async (req, res) => {
  try {
    const {
      productName,
      brand,
      price,
      stock,
      warranty,
      contactNumber,
      supplier,
    } = req.body;

    // all field are required
    if (
      !productName ||
      !brand ||
      !price ||
      !stock ||
      !warranty ||
      !contactNumber ||
      !supplier
    ) {
      return res.status(400).json({
        message: "All fields are required!",
        success: false,
      });
    }

    // create product
    const newProduct = {
      productName,
      brand,
      price,
      stock,
      warranty,
      contactNumber,
      supplier,
      created_by: req.user.id,
    };

    const product = await productModel.create(newProduct);

    return res.status(201).json({
      message: "Product added successfully.",
      product,
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

// 2. get all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    // if no products
    if (!products) {
      return res.status(404).json({
        message: "Products not found!",
        success: false,
        error: error.message,
      });
    }

    return res.status(200).json({
      products,
      success: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error!",
      success: false,
      error: error.message,
    });
  }
};

// 3. get all products of admin
export const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({ created_by: req.user.id });

    // if no products
    if (!products) {
      return res.status(404).json({
        message: "Products not found!",
        success: false,
        error: error.message,
      });
    }

    return res.status(200).json({
      products,
      success: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error!",
      success: false,
      error: error.message,
    });
  }
};

// 4. get a single product by id
export const getProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.productId);

    // if no products
    if (!product) {
      return res.status(404).json({
        message: "Product not found!",
        success: false,
        error: error.message,
      });
    }

    return res.status(200).json({
      product,
      success: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error!",
      success: false,
      error: error.message,
    });
  }
};

// 5. delete a product by id
export const deleteProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.productId);

    // if no products
    if (!product) {
      return res.status(404).json({
        message: "Product not found!",
        success: false,
        error: error.message,
      });
    }

    return res.status(200).json({
      message: "Product deleted successfully.",
      success: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error!",
      success: false,
      error: error.message,
    });
  }
};

// 6. update a product by id
export const updateProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.productId);

    // if no products
    if (!product) {
      return res.status(404).json({
        message: "Product not found!",
        success: false,
        error: error.message,
      });
    }

    const {
      productName,
      brand,
      price,
      stock,
      warranty,
      contactNumber,
      supplier,
    } = req.body;

    // update fields
    product.productName = productName || product.productName;
    product.brand = brand || product.brand;
    product.price = price || product.price;
    product.stock = stock || product.stock;
    product.warranty = warranty || product.warranty;
    product.contactNumber = contactNumber || product.contactNumber;
    product.supplier = supplier || product.supplier;

    await product.save({ new: true });

    return res.status(200).json({
      message: "Product updated successfully.",
      product,
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

// 7. view all orders of admin products
export const viewOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();

    if (!orders) {
      return res.status(404).json({
        message: "No orders!",
        success: false,
      });
    }

    return res.status(200).json({
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

// 8. update status of ordered product by order id
export const updateOrderStaus = async (req, res) => {
  try {
    const order = await orderModel.findById(req.params.orderId);
    if (!order) {
      return res.status(404).json({
        message: "Order not found!",
        success: false,
      });
    }

    const { status } = req.body;
    order.status = status || order.status;

    await order.save({ new: true });

    return res.status(200).json({
      message: "order Status updated successfully.",
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


