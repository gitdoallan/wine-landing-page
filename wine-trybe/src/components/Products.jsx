import React, { useEffect, useState } from "react";
import { apiProducts } from "../services/api";

export default function Products() {
  const [products, setProducts] = useState();
  console.log(products)

  useEffect(() => {
    apiProducts
      .get("/products")
      .then((response) => setProducts(response.data.items))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
    </div>
  );
}

