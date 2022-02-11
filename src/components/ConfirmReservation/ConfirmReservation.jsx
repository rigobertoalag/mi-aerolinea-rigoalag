import React, { useState, useEffect } from "react";
import style from "./ConfirmReservation.module.css";

const ConfirmReservation = ({ active }) => {
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
        <h2>Ingresa tus datos</h2>
      </div>

      <div className={style.cardInput}>
        
        <label>Nombre(s)</label>
        <input placeholder="Ej. Juan" type="text" className={style.reservationInput}/>

        <label>Apellidos</label>
        <input placeholder="Ej. Perez" type="text" className={style.reservationInput}/>

        <label>Direccion</label>
        <textarea placeholder="Ej. Av. Constitucion" type="text" className={style.reservationInput}/>

        <label>Correo electrónico</label>
        <input placeholder="Ej. tucorreo@mail.com" type="email" className={style.reservationInput}/>
      </div>

      <button className={style.reservationBtn}>Reservar</button>
    </div>
  );
};

export default ConfirmReservation;
