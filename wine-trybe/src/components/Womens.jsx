import { womanApi } from "../services/apiWine";
import './WomensCard.css';

export default function Womens() {
  return (
    <div className="woman-container">
      {womanApi.map((wine) => (
        <div key={wine.id} className="card-woman-container">
          <h2>{wine.title}</h2>
          <div>
            <img src={wine.image} alt={wine.title} className="wine-picture" />
            <p>{wine.comment}</p>
          </div>
          <div>
            <p className="list-name-ingredient">{wine.priceMember}</p>
            <p className="list-name-ingredient">{wine.priceNmember}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
