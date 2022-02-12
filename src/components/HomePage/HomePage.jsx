import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../Redux/slices/counterSlice.js";
import { get } from "../../Redux/slices/citiesSlice.js";
import style from "./HomePage.module.css";
import Reservations from "../Reservations";

const HomePage = () => {
  const [originName, setOriginName] = useState("Origen");
  // const [originID, setOriginID] = useState(null);
  const [destination, setDestination] = useState("Destino");
  const [passengers, setPassengers] = useState(0);
  const [isActiveReservations, setIsActiveReservations] = useState(false);

  const [isCities, setIsCities] = useState(false);
  const [cities, setCities] = useState([]);
  const [citiesFilter, setCitiesFilter] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/cities")
      .then((res) => res.json())
      .then((dd) => {
        setCities(dd);
        setIsCities(true);
      });
  }, []);

  const setDestinations = (id) => {
    const ci = cities;
    const arrayCities = ci;
    const originSelected = arrayCities.splice(id, 1);

    setOriginName(originSelected.map((d) => d.destination));
    setCitiesFilter(arrayCities);
  };

  const dateByDestination = [citiesFilter.find((d) => d.id == destination)];

  const validData = () => {
    if (origin && destination && passengers) {
      setIsActiveReservations(true);
      // setOrigin("Origen");
      setDestination("Destino");
      setPassengers(0);
    } else {
      setIsActiveReservations(false);
    }
  };

  const count = useSelector((state) => state.counter.value);
  const response = useSelector((state) => state.cities.value);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      <div className={style.homeContainer}>
        <h3 className={style.welcomeTitle}>Bienvenido</h3>
        <div className={style.originContainer}>
          <small className={style.smallText}>Origen</small>
          <select
            name="ori"
            value={origin}
            onChange={(e) => setDestinations(e.target.value)}
            className={style.selectOrigin}
          >
            <option value={originName} style={{ color: "gray" }}>
              {originName}
            </option>
            {isCities ? (
              cities.map((d) => (
                <option value={d.id} key={d.id}>
                  {d.destination}
                </option>
              ))
            ) : (
              <option>Cargando...</option>
            )}
          </select>
        </div>

        <div className={style.destinationContainer}>
          <small className={style.smallText}>Destino</small>
          <select
            name="des"
            onChange={(e) => setDestination(e.target.value)}
            className={style.selectDestination}
            disabled={origin !== "Origen" ? false : true}
            // onClick={()=>setDestinations(0)}
          >
            <option value="default">Destino</option>
            {citiesFilter.map((d) => (
              <option value={d.id} key={d.id}>
                {d.destination}
              </option>
            ))}
          </select>
        </div>

        <div className={style.dateAndPerson}>
          <div className={style.dateContainer}>
            <small className={style.smallText}>
              Horarios de salida disponible
            </small>
            <select
              name="select"
              disabled={destination != "Destino" ? false : true}
              className={style.dateSelect}
            >
              <option value="default">Seleccionar horario</option>
              {destination !== "Destino"
                ? dateByDestination.map((d) =>
                    d.flights.map((date) => (
                      <option value={date.id} key={date.id}>
                        {date.takeoff}
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
              {/* <input value={passengers} disabled={true} /> */}
              <div className={style.fieldPassengersContainer}>
                <p className={style.fieldPassengers}>{passengers}</p>
                {passengers >= 10 ? (
                  <p className={style.fieldPassengerAlert}>
                    ¡Solo puedes comprar 10 boletos!
                  </p>
                ) : null}
              </div>
              <button
                className={style.minorMayorBtn}
                onClick={() => setPassengers(passengers + 1)}
                disabled={
                  passengers >= 10
                    ? true
                    : destination !== "Destino"
                    ? false
                    : true
                }
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button onClick={() => validData()} className={style.reserveBtn}>
          Reservar
        </button>

        <div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>

            <button
              aria-label="añadir test"
              onClick={() => dispatch(get("adios"))}
            >
              test
            </button>
          </div>
        </div>
      </div>

      {/* <Reservations active={isActiveReservations} /> commented for testing */}
      <Reservations active={isActiveReservations} />
    </div>
  );
};

export default HomePage;
