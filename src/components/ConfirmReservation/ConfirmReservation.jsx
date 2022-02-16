import React, { useState, useEffect } from "react";
import CompleReservation from "./CompleteReservation";
import style from "./ConfirmReservation.module.css";
import store from "../../Redux/apiCall/store";

const ConfirmReservation = ({ active }) => {
  const [isActive, setIsActive] = useState(active);
  const [completeOrder, setCompleteOrder] = useState(false);

  /** USER DATA VALIDATION PRESENCE */
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const [isValidData, setIsValidData] = useState(false);
  /** */

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const validDataForm = () => {
    if(name && lastName && address && email){
      setIsValidData(true)
      setCompleteOrder(true)
      setIsActive(false);
      setCompleteOrder(true);

      store.dispatch({
        type: "ADD_USER_DATA",
        text: {
          name: name,
          lastName: lastName,
          address: address,
          email: email
        },
      });
    }
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label style={{ marginTop: 10 }}>Apellidos</label>
          <input
            placeholder="Ej. Perez"
            type="text"
            className={style.reservationInput}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label style={{ marginTop: 10 }}>Direccion</label>
          <textarea
            placeholder="Ej. Av. Constitucion"
            type="text"
            className={style.reservationInput}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label style={{ marginTop: 10 }}>Correo electrónico</label>
          <input
            placeholder="Ej. tucorreo@mail.com"
            type="email"
            className={style.reservationInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className={style.reservationBtn}
          style={{ marginTop: 20 }}
          onClick={() => {
            validDataForm();
          }}
        >
          Reservar
        </button>
      </div>
      <CompleReservation complete={completeOrder} />
    </>
  );
};

export default ConfirmReservation;
