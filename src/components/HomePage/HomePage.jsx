import React, { useState, useEffect } from "react";
import style from './HomePage.module.css'
import Reservations from "../Reservations";

import data from "../data";

const HomePage = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [passengers, setPassengers] = useState(0);
  const [isActiveReservations, setIsActiveReservations] = useState(false);

  const dateById = [data.find((d) => d.id == destination)];

  const validData = () => {
    if (origin && destination && passengers) {
      console.log("entro bien");
      setIsActiveReservations(true);
      setOrigin(null)
      setDestination(null)
      setPassengers(0)
    } else {
      setIsActiveReservations(false);
      console.log("entro mal");
    }
  };

  return (
    <div className={style.container}>
      <div className={style.homeContainer}>
        <h3 className={style.welcomeTitle}>Bienvenido</h3>
        <div className={style.originContainer}>
          <small className={style.smallText}>Origen</small>
          <select name="ori" onChange={(e) => setOrigin(e.target.value)} className={style.selectOrigin}>
            <option value="default" selected="selected">
              Origen
            </option>
            {data.map((d) => (
              <option value={d.destination} key={d.id}>
                {d.destination}
              </option>
            ))}
          </select>
        </div>

        <div className={style.destinationContainer}>
          <small className={style.smallText}>Destino</small>
          <select
            name="des"
            onChange={(e) => setDestination(e.target.value)}
            className={style.selectDestination}
            disabled={origin ? false : true}
          >
            <option value="default" selected="selected">
              Destino
            </option>
            {data.map((d) => (
              <option value={d.id} key={d.id}>
                {d.destination}
              </option>
            ))}
          </select>
        </div>

        <div className={style.dateAndPerson}>
          <div className={style.dateContainer}>
            <small className={style.smallText}>Horarios de salida disponible</small>
            <select name="select" disabled={destination ? false : true} className={style.dateSelect}>
              <option value="default" selected="selected">
                Seleccionar horario
              </option>
              {destination
                ? dateById.map((e) =>
                  e.vuelos.map((date) => (
                    <option value={date.id} key={date.id}>
                      {date.despegue}
                    </option>
                  ))
                )
                : null}
            </select>
          </div>

          <div className={style.personContainer}>
          <small className={style.smallText}>Numero de personas</small>

            <div className={style.btnsInput}>
              <button
                className={style.minorMayorBtn}
                onClick={() => setPassengers(passengers - 1)}
                disabled={passengers >= 1 ? false : true}
              >
                -
              </button>
              <input value={passengers} disabled={true} />
              <button
                className={style.minorMayorBtn}
                onClick={() => setPassengers(passengers + 1)}
                disabled={passengers >= 10 ? true : destination ? false : true}
              >
                +
              </button>
              {passengers >= 10 ? <p>¡Solo puedes comprar 10 boletos!</p> : null}
            </div>
          </div>
        </div>

        <button onClick={() => validData()} className={style.reserveBtn}>Reservar</button>
      </div>

      {/* <Reservations active={isActiveReservations} /> commented for testing */}
      <Reservations active={isActiveReservations} />
    </div>
  );
};

export default HomePage;
