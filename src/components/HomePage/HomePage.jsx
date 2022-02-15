import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./HomePage.module.css";
import Reservations from "../Reservations";

import store from "../../Redux/apiCall/store";

const HomePage = () => {
  const reduxCities = useSelector((state) => state.cities.data);
  const dispatch = useDispatch();
  /** */

  // user select Origin hooks
  const [activeOriginSelect, setActiveOriginSelect] = useState(false);
  const [originSelected, setOriginSelected] = useState({
    originID: null,
    originName: null,
  });

  // user select Destination hooks
  const [destinations, setDestinations] = useState([]); //mutable array cities to filter
  const [activeDestinationSelect, setActiveDestinationSelect] = useState(false);
  const [destinationSelected, setDestinationSelected] = useState({
    destinationID: null,
    destinationName: null,
    destinationFlight: {},
  });

  //user select flightDate hooks
  const [activeDateSelect, setActiveDateSelect] = useState(false);
  const [flightDates, setflightDates] = useState({
    id: null,
    takeoff: null,
    landing: null,
    price: null,
  });

  //user select Passengers hooks
  const [passengers, setPassengers] = useState(0);

  //hook who display reservation screen
  const [isActiveReservations, setIsActiveReservations] = useState(false);

  const [cities, setCities] = useState(false); //immutable array cities

  // effect to set the cities from redux store in localstorage to convert a immutable cities array
  useEffect(() => {
    if (reduxCities) {
      localStorage.setItem("cities", [JSON.stringify(reduxCities)]);
      let cities = localStorage.getItem("cities");
      cities = JSON.parse(cities);
      setCities(cities);
    }
  }, [reduxCities]);

  // fucntion to filter destinations, user cant select the same value in origin to the destination value
  const filterDestinations = ({ originID, originName }) => {
    // hook to set origin variables
    setActiveOriginSelect(false);
    setOriginSelected({
      originID: originID,
      originName: originName,
    });

    //filter array to destinations list
    const citiesArray = cities;
    const citiesFilter = citiesArray;
    const filter = citiesFilter.splice(originID, 1); //this var returns the user selected origin

    setDestinations(citiesFilter);
  };

  console.log(
    "originSelected",
    originSelected,
    "destinationSelected",
    destinationSelected,
    "flightDates",
    flightDates,
    "passengers",
    passengers
  );

  const validData = () => {
    if (originSelected && destinationSelected && flightDates && passengers) {
      store.dispatch({
        type: "ADD_RESERVATION",
        text: {
          origin: originSelected.originName,
          destination: destinationSelected.destinationName,
          flight: flightDates,
          passengers: passengers,
        },
      });
      setIsActiveReservations(true);
      setOriginSelected({
        originID: null,
        originName: null,
      });
      setDestinationSelected({
        destinationID: null,
        destinationName: null,
        destinationFlight: {},
      });
      setflightDates({
        id: null,
        takeoff: null,
        landing: null,
        price: null,
      });
      setPassengers(0);
    } else {
      setIsActiveReservations(false);
    }
  };

  /** */
  return (
    <div className={style.container}>
      <div className={style.homeContainer}>
        <h3 className={style.welcomeTitle}>Bienvenido</h3>
        <div className={style.originContainer}>
          <small className={style.smallText}>Origen</small>
          <div
            className={style.selectOrigin}
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              border: "1px solid navy",
              color: "navy",
              cursor: "pointer",
            }}
            onClick={
              activeOriginSelect
                ? () => setActiveOriginSelect(false)
                : () => setActiveOriginSelect(true)
            }
          >
            <p style={{ paddingLeft: 10 }}>
              {originSelected.originName
                ? originSelected.originName
                : "Selecciona el origen"}
            </p>
            {activeOriginSelect ? (
              <div className={style.customSelect}>
                {cities ? (
                  reduxCities.map((d) => (
                    <p
                      className={style.customOption}
                      key={d.id}
                      onClick={() =>
                        filterDestinations({
                          originID: d.id,
                          originName: d.destination,
                        })
                      }
                    >
                      {d.destination}
                    </p>
                  ))
                ) : (
                  <option>Cargando...</option>
                )}
              </div>
            ) : null}
          </div>
        </div>

        <div className={style.destinationContainer}>
          <small className={style.smallText}>Destino</small>
          <div
            className={style.selectOrigin}
            style={{
              backgroundColor: "white",
              borderRadius: 5,
              border: "1px solid navy",
              color: "navy",
              cursor: "pointer",
            }}
            onClick={
              activeDestinationSelect
                ? () => setActiveDestinationSelect(false)
                : () => setActiveDestinationSelect(true)
            }
          >
            <p style={{ paddingLeft: 10 }}>
              {destinationSelected.destinationName
                ? destinationSelected.destinationName
                : "Selecciona el destino"}
            </p>
            {activeDestinationSelect ? (
              <div className={style.customSelect}>
                {cities ? (
                  destinations.map((d) => (
                    <p
                      className={style.customOption}
                      key={d.id}
                      onClick={
                        (() => setActiveDestinationSelect(false),
                        () =>
                          setDestinationSelected({
                            destinationID: d.id,
                            destinationName: d.destination,
                            destinationFlight: d.flights,
                          }))
                      }
                    >
                      {d.destination}
                    </p>
                  ))
                ) : (
                  <option>Cargando...</option>
                )}
              </div>
            ) : null}
          </div>
        </div>

        <div className={style.dateAndPerson}>
          <div className={style.dateContainer}>
            <small className={style.smallText}>
              Horarios de salida disponible
            </small>
            <div
              className={style.selectOrigin}
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                border: "1px solid navy",
                color: "navy",
                cursor: "pointer",
                width: "95%",
                height: "100%",
                fontSize: "large",
              }}
              onClick={
                activeDateSelect
                  ? () => setActiveDateSelect(false)
                  : () => setActiveDateSelect(true)
              }
            >
              <p style={{ paddingLeft: 10 }}>
                {flightDates.takeoff
                  ? flightDates.takeoff
                  : "Seleccionar horario"}
              </p>
              {activeDateSelect ? (
                <div className={style.customSelect}>
                  {cities ? (
                    destinationSelected.destinationFlight.map((d) => (
                      <p
                        className={style.customOption}
                        key={d.id}
                        onClick={
                          (() => setActiveDateSelect(false),
                          () =>
                            setflightDates({
                              id: d.id,
                              takeoff: d.takeoff,
                              landing: d.landing,
                              price: d.price,
                            }))
                        }
                      >
                        {d.takeoff}
                      </p>
                    ))
                  ) : (
                    <option>Cargando...</option>
                  )}
                </div>
              ) : null}
            </div>
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
                  passengers >= 10 ? true : destinationSelected ? false : true
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
      </div>

      {/* <Reservations active={isActiveReservations} /> commented for testing */}
      <Reservations active={isActiveReservations} />
    </div>
  );
};

export default HomePage;
