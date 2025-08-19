import React from "react";
import "./ClothStoreList.css";

const ClothStoreList = () => {
  const products = [
    {
      productId: 1,
      productName: "T-Shirt",
      description: "100% cotton casual wear",
      price: 499,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productId: 2,
      productName: "Jeans",
      description: "Slim fit blue denim",
      price: 1299,
      sizes: ["M", "L", "XL"],
    },
    {
      productId: 3,
      productName: "Jacket",
      description: "Winter collection leather jacket",
      price: 2499,
      sizes: ["L", "XL"],
    },
    {
      productId: 4,
      productName: "Shirt",
      description: "Formal cotton shirt",
      price: 899,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productId: 5,
      productName: "Kurti",
      description: "Traditional Indian wear with embroidery",
      price: 699,
      sizes: ["S", "M", "L"],
    },
    {
      productId: 6,
      productName: "Hoodie",
      description: "Casual fleece hoodie with pockets",
      price: 1599,
      sizes: ["M", "L", "XL"],
    },
    {
      productId: 7,
      productName: "Shorts",
      description: "Comfortable cotton shorts",
      price: 599,
      sizes: ["S", "M", "L"],
    },
    {
      productId: 8,
      productName: "Skirt",
      description: "Flared casual skirt",
      price: 749,
      sizes: ["S", "M", "L"],
    },
    {
      productId: 9,
      productName: "Blazer",
      description: "Formal office wear blazer",
      price: 2999,
      sizes: ["M", "L", "XL"],
    },
    {
      productId: 10,
      productName: "Track Pants",
      description: "Sportswear with stretch fabric",
      price: 999,
      sizes: ["S", "M", "L", "XL"],
    },
  ];

  //const products = [];

  return (
    <div className="app-container">
      <h1 className="store-title">Cloth Store List</h1>
      {products.length === 0 ? (
        <p className="no-products">No Products Available</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr className="table-header">
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Price (₹)</th>
              <th>Available Sizes</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productId} className="product-row">
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td className="product-price">₹{product.price}</td>
                <td>{product.sizes.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ClothStoreList;
