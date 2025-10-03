import React, { useState } from "react";
// import "./EcommerceSite.css";
import ProductCard from "../Components/ProductCard";
import img1 from "../assets/images/apple.webp";
import img2 from "../assets/images/redmi.png";
import img3 from "../assets/images/sony.jpg";

function EcommerceSite() {
  const data = [
    {
      id: 1,
      pName: "Apple",
      price: 45000,
      desc: "Some quick example text to build on the card",
      img: img1,
      isStock: true,
    },
    {
      id: 2,
      pName: "Sony",
      price: 25000,
      desc: "Some quick example text to build on the card",
      img: img3,
      isStock: false,
    },
    {
      id: 3,
      pName: "Redmi",
      price: 15000,
      desc: "Some quick example text to build on the card",
      img: img2,
      isStock: true,
    },
    {
      id: 4,
      pName: "Samsung",
      price: 12000,
      desc: "Some quick example text to build on the card",
      img: img1,
      isStock: false,
    },
    {
      id: 5,
      pName: "Vivo",
      price: 21000,
      desc: "Some quick example text to build on the card",
      img: img3,
      isStock: true,
    },
    {
      id: 6,
      pName: "Oppo",
      price: 14500,
      desc: "Some quick example text to build on the card",
      img: img2,
      isStock: true,
    },
  ];

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (item) => {
    let temp = cartItems.filter((citem) => citem.id != item.id)
    setCartItems(temp)
  };

  return (
    <div className="container-fluid maincontent">
      <div className="row">
        <div className="col-10 leftside">
          <div className="row m-2 d-flex gap-2">
            {data.map((product) => {
              return (
                <ProductCard
                  product={product}
                  handleAddToCart={handleAddToCart}
                />
              );
            })}
          </div>
        </div>
        <div className="col-2 rightside">
          <ol class="list-group list-group-numbered">
            <h2>Count: {cartItems.length}</h2>
            {cartItems.map((item) => {
              return (
                <li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">{item.pName}</div>
                    {item.price}
                  </div>
                  <button
                    class="badge text-bg-primary rounded-pill"
                    onClick={() => {
                      handleRemoveFromCart(item);
                    }}
                  >
                    x
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default EcommerceSite;
