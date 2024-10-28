import React from "react";

export const Card = () => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://ichef.bbci.co.uk/ace/ws/624/amz/worldservice/live/assets/images/2016/03/31/160331124517_michael_jordan_624x624_getty_nocredit.jpg.webp" className="card-img-top" alt="Michael Jordan" />
        <div className="card-body">
          <h5 className="card-title">Michael Jordan</h5>
          <p className="card-text">
          Michael Jordan considerado el mejor jugador de baloncesto de todos los tiempos obtuvo,
          6 títulos NBA con Chicago Bulls, 5 veces MVP, ícono del deporte y la cultura pop. Eso es épico.🏀</p>
          <div className="d-flex justify-content-center">
            <a href="#" className="btn btn-primary">Estadísticas</a>
          </div>
        </div>
      </div>
    </div>
  );
};