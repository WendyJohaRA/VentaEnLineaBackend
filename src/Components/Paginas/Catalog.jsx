import React from "react";
import p1 from "../Assest/p1.jpg";
import p2 from "../Assest/p2.jpg";
import p3 from "../Assest/p3.jpg";


const Catalog = () => {
  return (
    <><div className="contenedor">
      <div className="card-catalog" width="18em;">
        <img src={p1} width="70" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Camisa Lobo</h5>
          <p className="card-text">Camisa de jean negra manga larga</p>
          <p className="price">$ 80.000</p>
          <a href="/Checkout"  className="btn btn-primary">
            Comprar
          </a>
        </div>
      </div>
      

      <div className="card-catalog" width="18em;">
        <img src={p2} width="70" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Body princess</h5>
          <p className="card-text">Camisa de jean negra manga larga</p>
          <p className="price">$ 120.000</p>
          <a href="/Checkout" className="btn btn-primary">Comprar
          </a>
        
        </div>
      </div>
  

      <div className="card-catalog" width="18em;">
        <img src={p3} width="70" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Camiseta Leyend</h5>
          <p className="card-text">Camiseta manga corta, estampado blaco </p>
          <p className="price">$ 40.000</p>
          <a href="/Checkout"  className="btn btn-primary">
            Comprar
          </a>
      
      
        </div>
      </div>
      </div>
    </>
  );
};

export default Catalog;
