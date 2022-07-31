import React, { useEffect, useState } from "react";
import { apiProducts } from "../services/api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {                                                                                       
    apiProducts
      .get("/products?page=1&limit=10")
      .then((response) => setProducts(response.data.items))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);                                                                                 

  return (
    <div className="Products">
      <h3> Catálogos - Vinhos  </h3>   
    <div   
      className="d-flex flex-nowrap overflow-auto carousel-inner" 
      style={ { gap: '10px' } }
    > 
    { products.length > 0 ? (
      products.map(({ image, name, sommelierComment }, index) =>  (     
          <div   
            key={ index }
          >
            <img
                src={ image }
                alt={ name }
                width="100"
                height="100"
            />          
            <h6>
              { name }
            </h6>
          </div>            
      ))
    ) : ' '
    };
    </div>  
  </div>  
  );
}
