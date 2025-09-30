import React from "react";
import "./EcommerceSite.css";
import ProductCard from "../Components/ProductCard";
import img1 from "../assets/images/apple.webp"
import img2 from "../assets/images/redmi.png"
import img3 from "../assets/images/sony.jpg"

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

  return (
    <div className="container-fluid maincontent">
      <div className="row">
        <div className="col-10 leftside">
          <div className="row m-2 d-flex gap-2">
            {
              data.map((product) => {
                return <ProductCard product={product} />;
              })
            }
          </div>
        </div>
        <div className="col-2 rightside">right</div>
      </div>
    </div>
  );
}

export default EcommerceSite;
