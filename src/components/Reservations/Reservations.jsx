import React, { useState, useEffect } from "react";
import style from "./Reservations.module.css";

import ConfirmReservation from "../ConfirmReservation";

import store from "../../Redux/apiCall/store";
import { useSelector } from "react-redux";

const Reservations = ({ active }) => {
  const [isActive, setIsActive] = useState(active);
  const [isConfirm, setIsConfirm] = useState(false);

  useEffect(() => {
    setIsActive(active)
    
  }, [active]);

  /** */
  //data from reservation
  const dataReservation = useSelector((state) => state.addReservation);
  const modalState = useSelector((state) => state.activeReservationModal);
  
  console.log("valor de la prop active", active);

  const getTotalOfReservations = () => {
    let subtotal = dataReservation.map((r) => r.flight.price * r.passengers);
    let total = 0;
    subtotal.forEach(x => {
      total += x
    })
    return total
  };

  const showHideModal = () => {
    if (modalState) {
      store.dispatch({
        type: "CLOSE_MODAL",
        payload: true,
      });
      console.log("el modal esta true");
    } else {
      store.dispatch({
        type: "OPEN_MODAL",
        payload: true,
      });
      console.log("el modal esta false");
    }
  };
  /** */

  return (
    <div
      style={{ display: isActive ? "flex" : "none" }}
      className={style.container}
    >
      <div className={style.title}>
        <h2>{isConfirm ? "Datos para la reservacion" : "Mis Reservaciones"}</h2>
      </div>

      {!isConfirm ? (
        <>
          {dataReservation.map((reser) => (
            <div className={style.infoContainer} key={reser.id}>
              <div className={style.citiesContainer}>
                <p style={{ marginRight: 10 }}>Ciduda origen: {reser.origin}</p>
                <p> Ciudad destino: {reser.destination}</p>
              </div>

              <p>Hora de salida: {reser.flight.takeoff}</p>
              <p>Hora estimada de llegada: {reser.flight.landing}</p>
              <p>Numero de viajeros: {reser.passengers}</p>
              <p>Costo del boleto p/persona: ${reser.flight.price}</p>
              <p>
                Total de esta reservacion: $
                {reser.flight.price * reser.passengers}
              </p>

              <div className={style.deleteReservationContainer}>
                <button className={style.deleteBtn}>
                  Borrar esta reservacion
                </button>
              </div>
            </div>
          ))}

          <div className={style.totalContainer}>
            <h4
              className={style.totalReservation}
              style={{ borderColor: isConfirm ? "gray" : "null" }}
            >
              Total: ${getTotalOfReservations()}
            </h4>
            <p className={style.smallText}>*Los precios se muestran con IVA</p>
          </div>
        </>
      ) : null}

      <ConfirmReservation active={isConfirm} />

      {isConfirm ? null : (
        <>
          <div className={style.bottomReservationBtnContainer}>
            <button
              className={style.outlineBtn}
              onClick={() => showHideModal()}
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
        onClick={() => showHideModal()}
      >
        <span className="material-icons" style={{ cursor: "pointer" }}>
          close
        </span>
      </div>
    </div>
  );
};

export default Reservations;
