import React, { useEffect, useState } from "react";
import { apiPlans } from "../services/api";
import '../style/planCard.css';

export default function Plans() {
  const [plans, setPlans] = useState([]);
  // console.log(plans)

  useEffect(() => {
    apiPlans
      .get("/modalities")
      .then((response) => setPlans(response.data[0].plans))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
      console.log(plans);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
/*   const calculateAdvantage = (priceWithDiscount, price) => {
    return price - priceWithDiscount
  }; */

  return (
    <div className="Plans">
      <div className="plans-title">
        <h3> WineBox </h3>
        <h1> Essenciais </h1>
        <p> Rótulos descomplicados, perfeitos para quem está começando 
          a desbravar o mundo do vinho.</p>
      </div> 

      <div className="plans-cards">
        { plans.length > 0 ? plans.map((plan) => (

          <div className='plan-card' key={ plan.id }>

            <div className='title-card'>
              <h2> { plan.name } </h2>
              <button className="promocao">
                  { plan.promotion }
              </button>
            </div>

            <div className='plan-price'>
              <p> De { plan.price } por </p>
              <h1> { plan.priceWithDiscount } </h1>
              <div>
                <p> { plan.name === "Plano Anual" ? 
                    ` você economiza ${ (plan.price - plan.priceWithDiscount).toFixed(2) } por ano!` :
                    `você economiza ${ (plan.price - plan.priceWithDiscount).toFixed(2) } por mês!` } 
                </p>
              </div>
              
            </div>

            <div className='footer-card'>
                  <div className="brinde"> 
                    {plan.gift === null ? 'nenhum brinde' : 
                    `Brinde: ${ plan.gift }`
                    }
                    </div>
                  <button className="assine"> Assinar { plan.name } </button>
            </div>

          </div> 
          )
          ) : '' }
      </div>
      
    </div>
  );
}