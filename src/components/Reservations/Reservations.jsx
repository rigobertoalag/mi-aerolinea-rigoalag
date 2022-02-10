import React, { useState, useEffect } from "react";
import style from "./Reservations.module.css";

const Reservations = ({ active }) => {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div
      style={{ display: isActive ? "flex" : "none" }}
      className={style.container}
    >
      <h2>Mis Reservaciones</h2>

      <div className={style.infoContainer}>
        <div className={style.citiesContainer}>
          <p>Ciduda origen: "ciudad" - </p>
          <p> Ciudad destino: "ciudad"</p>
        </div>

        <p>Hora de salida: "hora"</p>
        <p>Numero de viajeros: "No"</p>
        <p>Total de esta reservacion: "$$"</p>

        <div className={style.deleteReservationContainer}>
          <button className={style.deleteReservationBtn}>
            Borrar esta reservacion
          </button>
        </div>
      </div>

      <div className={style.infoContainer}>
        <div className={style.citiesContainer}>
          <p>Ciduda origen: "ciudad" - </p>
          <p> Ciudad destino: "ciudad"</p>
        </div>

        <p>Hora de salida: "hora"</p>
        <p>Numero de viajeros: "No"</p>
        <p>Total de esta reservacion: "$$"</p>

        <div className={style.deleteReservationContainer}>
          <button className={style.deleteReservationBtn}>
            Borrar esta reservacion
          </button>
        </div>
      </div>

      <h4>Total: "$$"</h4>

      <div className={style.bottomReservationBtnContainer}>
        <button>Hacer otra reserva</button>
        <button>Continuar la reserva</button>
      </div>

      <div className={style.cleanReservarion}>
          <button>Borar todas las reservaciones</button>
      </div>

      <div className={style.closeReservationContainer}>
          <p>X</p>
      </div>
      {/* <button onClick={()=>setIsActive(false)}>Cerrar reservaciones</button> commented for testing */}
    </div>
  );
};

export default Reservations;
