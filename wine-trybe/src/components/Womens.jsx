import { womanApi } from "../services/apiWine";
import "./WomensCard.css";

export default function Womens() {
  return (
    <div className="woman-container">
      {womanApi.map((wine) => (
        <div key={wine.id} className="card-woman-container">
          <h2 className="wine-title">{wine.title}</h2>
          <div className="text-pic-container">
            <img src={wine.image} alt={wine.title} className="wine-picture" />
            <p className="wine-text">{wine.comment}</p>
          </div>
          <div className="price-container">
            <div className="socio-container">
              <p>SÓCIO WINE: R$</p>
              <p className="wine-price-socio">{(wine.priceMember).toFixed(2)}</p>
              <div className="btt-add">
              <button type="button" className="btt-style">Adicionar</button>
              </div>
            </div>
            <div className="nao-socio-container">
              <p>NÃO SÓCIO: R$</p>
              <p className="wine-price-nao-socio">{(wine.priceNmember).toFixed(2)}</p>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
