import React, { useState, useEffect } from "react";
import CompleReservation from "./CompleteReservation";
import style from "./ConfirmReservation.module.css";

const ConfirmReservation = ({ active }) => {
  const [isActive, setIsActive] = useState(active);
  const [completeOrder, setCompleteOrder] = useState(false);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const orderComplete = () => {
    setIsActive(false);
    setCompleteOrder(true);
  };

  return (
    <>
      <div
        style={{ display: isActive ? "flex" : "none" }}
        className={style.container}
      >
        <div className={style.title}>
          <h2>Ingresa tus datos</h2>
        </div>

        <div className={style.cardInput}>
          <label>Nombre(s)</label>
          <input
            placeholder="Ej. Juan"
            type="text"
            className={style.reservationInput}
          />

          <label style={{ marginTop: 10 }}>Apellidos</label>
          <input
            placeholder="Ej. Perez"
            type="text"
            className={style.reservationInput}
          />

          <label style={{ marginTop: 10 }}>Direccion</label>
          <textarea
            placeholder="Ej. Av. Constitucion"
            type="text"
            className={style.reservationInput}
          />

          <label style={{ marginTop: 10 }}>Correo electrónico</label>
          <input
            placeholder="Ej. tucorreo@mail.com"
            type="email"
            className={style.reservationInput}
          />
        </div>

        <button
          className={style.reservationBtn}
          onClick={() => orderComplete()}
        >
          Reservar
        </button>
      </div>
      <CompleReservation complete={completeOrder} />
    </>
  );
};

export default ConfirmReservation;
