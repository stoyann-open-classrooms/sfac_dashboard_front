import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:9000/sfac/api/produit/${id}`)
      .then((res) => setProduct(res.data));
  }, []);
  console.log(product);

  return (
    <div>
      <h1 className="title-detail-product"> {product.designation}</h1>
    </div>
  );
}
