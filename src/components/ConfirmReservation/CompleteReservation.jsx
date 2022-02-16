import React from "react";
import style from "./ConfirmReservation.module.css";
import { useSelector } from "react-redux";

const CompleteReservation = ({ complete }) => {
  const dataReservation = useSelector((state) => state.addReservation);
  const dataUser = useSelector((state) => state.userData);

  return (
    <div
      style={{ display: complete ? "flex" : "none" }}
      className={style.container}
    >
      <h1 style={{ textAlign: 'center' }}>Felicidades ya tienes tu vuelo</h1>
      <img
        src={process.env.PUBLIC_URL + "/img/check.png"}
        alt="check"
        style={{ width: "30%" }}
      />

      <div style={{ width: '60%' }}>
        {dataUser.map((du, index) => (
          <div key={index}>
            <h3>Tus datos</h3>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p style={{ fontWeight: "bold" }}>Nombre:</p>
              <p style={{ marginLeft: 5 }}>
                {du.name} {du.lastName}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p style={{ fontWeight: "bold" }}>Correo: </p>
              <p style={{ marginLeft: 5 }}>{du.email}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ width: '60%' }}>
        <h3>Reservaciones</h3>

        {dataReservation.map((dr, index) => (
          <div style={{ borderBottom: '1px solid gray', borderTop: '1px solid gray' }} key={index}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p style={{ fontWeight: "bold" }}>Origen: </p>
              <p style={{ marginLeft: 5 }}>
                {dr.originName}
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p style={{ fontWeight: "bold" }}>Destino: </p>
              <p style={{ marginLeft: 5 }}>{dr.destination}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p style={{ fontWeight: "bold" }}>Hora de salida: </p>
              <p style={{ marginLeft: 5 }}>{dr.flight.takeoff}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p style={{ fontWeight: "bold" }}>Hora de Llegada: </p>
              <p style={{ marginLeft: 5 }}>{dr.flight.landing}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => window.location.reload(false)} className={style.exitBtn}>Salir</button>
      <button onClick={() => window.location.reload(false)} className={style.reservationBtn}>
        Hacer otra reservacion
      </button>
    </div>
  );
};

export default CompleteReservation;
