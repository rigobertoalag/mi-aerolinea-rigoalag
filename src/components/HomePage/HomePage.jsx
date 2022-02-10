import React, { useState, useEffect } from "react";
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
    <div>
      <div>
        <div>
          <small>Origen</small>
          <select name="ori" onChange={(e) => setOrigin(e.target.value)}>
            {data.map((d) => (
              <option value={d.destination} key={d.id}>
                {d.destination}
              </option>
            ))}
            <option value="default" selected="selected">
              Origen
            </option>
          </select>
        </div>

        <div>
          <small>Destino</small>
          <select
            name="des"
            onChange={(e) => setDestination(e.target.value)}
            disabled={origin ? false : true}
          >
            {data.map((d) => (
              <option value={d.id} key={d.id}>
                {d.destination}
              </option>
            ))}
            <option value="default" selected="selected">
              Destino
            </option>
          </select>
        </div>

        <div>
          <small>Selecciona el horario</small>
          <select name="select" disabled={destination ? false : true}>
            {destination
              ? dateById.map((e) =>
                  e.vuelos.map((date) => (
                    <option value={date.id} key={date.id}>
                      {date.despegue}
                    </option>
                  ))
                )
              : null}
            <option value="default" selected="selected">
              Seleccionar horario
            </option>
          </select>
        </div>

        <div>
          <small>Numero de personas</small>
          <button
            onClick={() => setPassengers(passengers - 1)}
            disabled={passengers >= 1 ? false : true}
          >
            -
          </button>
          <input value={passengers} disabled={true} />
          <button
            onClick={() => setPassengers(passengers + 1)}
            disabled={passengers >= 10 ? true : destination ? false : true}
          >
            +
          </button>
          {passengers >= 10 ? <p>¡Solo puedes comprar 10 boletos!</p> : null}
        </div>
      </div>

      <button onClick={() => validData()}>Reservar</button>

      {/* <Reservations active={isActiveReservations} /> commented for testing */}
      <Reservations active={true} /> 
    </div>
  );
};

export default HomePage;
