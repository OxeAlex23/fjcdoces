import { useState } from "react";

function Principal() {
  const [price, setPrice] = useState(100);

  return (

    <div className="pricipal-content">
      <div className="div-filter">
        <div className="filter-price">
          <label htmlFor="price-input">Faixa de preço:</label>
          <input type="range" name="price-input" id="price-input" min={0} max={100} value={price} onChange={(e) => setPrice(e.target.value)} />
          <span id="result-price">{`R$ ${price}`}</span>
        </div>

        <div className="div-type-sweets">
          <div>
            <input type="checkbox" id="checkbox" />
            <span>Cupcakes</span>
          </div>
          <div>
            <input type="checkbox" id="checkbox" />
            <span>Chocolates</span>
          </div>
          <div>
            <input type="checkbox" id="checkbox" />
            <span>Bolos</span>
          </div>
          <div>
            <input type="checkbox" id="checkbox" />
            <span>Salgados</span>
          </div>
        </div>
      </div>

      <div className="main-sweets">
        <div className="div-best-sellers">
          <h2>Mais vendidos: </h2>
        </div>
        <div id="news">
          <h2>Ultimos lançamentos: </h2>
        </div>
      </div>

      <div className="ads"> 
    <p>tab for ads google</p>
      </div>
    </div>
  )
}

export default Principal;