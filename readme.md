# API Endpoints

## Product Routes

- **Create a new product**
  - `POST /`
  
- **Get all products**
  - `GET /all`
  
- **Get all products of admin**
  - `GET /`
  
- **Get a single product by ID**
  - `GET /:productId/single`
  
- **Delete a product by ID**
  - `DELETE /:productId`
  
- **Update a product by ID**
  - `PATCH /:productId`

## Order Routes

- **View all orders**
  - `GET /order`
  
- **Update the status of an ordered product by order ID**
  - `PATCH /:orderId/updateStatus`


## User Routes

- **Get all products**
  - `GET /product`
  
- **Place an order**
  - `POST /order`
  
- **View my orders history**
  - `GET /myOrders`
