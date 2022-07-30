import React, { useEffect, useState } from "react";
import { apiProducts } from "../services/api";

export default function Products() {
  const [products, setProducts] = useState();
  console.log(products)
  const maxLength = 6;

  useEffect(() => {
    apiProducts
      .get("/products")
      .then((response) => setProducts(response.data.items))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return products.map((prod, index ) => {
    if (index < maxLength) {
      return(
        <div className="App"
        key={ index }>
          <img
            src={ products.image }
            alt={ prod.name }
            width="100"
            height="100"
          />
        </div>
      );
    } return null;
  })
}

