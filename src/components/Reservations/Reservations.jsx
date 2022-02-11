import React, { useState, useEffect } from "react";
import style from "./Reservations.module.css";

import ConfirmReservation from "../ConfirmReservation";

const Reservations = ({ active }) => {
  const [isActive, setIsActive] = useState(active);
  const [isConfirm, setIsConfirm] = useState(false);

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

        {isConfirm ? null : (
          <div className={style.deleteReservationContainer}>
            <button className={style.deleteBtn}>Borrar esta reservacion</button>
          </div>
        )}
      </div>

      <div className={style.infoContainer}>
        <div className={style.citiesContainer}>
          <p>Ciduda origen: "ciudad" - </p>
          <p> Ciudad destino: "ciudad"</p>
        </div>

        <p>Hora de salida: "hora"</p>
        <p>Numero de viajeros: "No"</p>
        <p>Total de esta reservacion: "$$"</p>

        {isConfirm ? null : (
          <div className={style.deleteReservationContainer}>
            <button className={style.deleteBtn}>Borrar esta reservacion</button>
          </div>
        )}
      </div>

      <div className={style.totalContainer}>
        <h4 className={style.totalReservation} style={{ borderColor: isConfirm ? 'gray' : 'null' }}>Total: "$$"</h4>
        <p className={style.smallText}>*Los precios se muestran con IVA</p>
      </div>

      <ConfirmReservation active={isConfirm} />

      {isConfirm ? null : (
        <>
          <div className={style.bottomReservationBtnContainer}>
            <button
              className={style.outlineBtn}
              onClick={() => setIsActive(false)}
            >
              Hacer otra reserva
            </button>
            <button
              className={style.successBtn}
              onClick={() => setIsConfirm(true)}
            >
              Continuar la reservacion
            </button>
          </div>

          <div className={style.cleanReservation}>
            <button className={style.deleteReservationsBtn}>
              Borar todas las reservaciones
            </button>
          </div>
        </>
      )}

      <div
        className={style.closeReservationContainer}
        onClick={() => setIsActive(false)}
      >
        <span className="material-icons" style={{ cursor: "pointer" }}>
          close
        </span>
      </div>
    </div>
  );
};

export default Reservations;
