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
      <div className={style.title}>
        <h2>Mis Reservaciones</h2>
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
          <button className={style.deleteBtn}>
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
          <button className={style.deleteBtn}>
            Borrar esta reservacion
          </button>
        </div>
      </div>

      <div className={style.totalContainer}>
        <h4>Total: "$$"</h4>
        <p className={style.smallText}>*Los precios se muestran con IVA</p>
      </div>

      <div className={style.bottomReservationBtnContainer}>
        <button className={style.outlineBtn}>Hacer otra reserva</button>
        <button className={style.successBtn}>Continuar la reserva</button>
      </div>

      <div className={style.cleanReservation}>
        <button className={style.deleteReservationsBtn}>Borar todas las reservaciones</button>
      </div>

      <div className={style.closeReservationContainer} onClick={()=>setIsActive(false)}>
        <span class="material-icons" style={{ cursor: 'pointer'}}>
          close
        </span>
      </div>
    </div>
  );
};

export default Reservations;
