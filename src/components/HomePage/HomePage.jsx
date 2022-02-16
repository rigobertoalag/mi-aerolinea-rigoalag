import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./HomePage.module.css";
import Reservations from "../Reservations";

import store from "../../Redux/apiCall/store";

const HomePage = () => {
  const reduxCities = useSelector((state) => state.cities.data);
  const modalState = useSelector((state) => state.activeReservationModal);
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

  const [cities, setCities] = useState(false); //immutable array cities

  // hooks to display errors
  const [isErrorDestination, setIsErrorDestination] = useState(false);
  const [isErrorDate, setIsErrorDate] = useState(false);
  const [isErrorPassengers, setIsErrorPassengers] = useState(false);
  const [isValidata, setIsValidData] = useState(false)

  // effect to set the cities from redux store in localstorage to convert a immutable cities array
  useEffect(() => {
    if (reduxCities) {
      localStorage.setItem("cities", [JSON.stringify(reduxCities)]);
      let cities = localStorage.getItem("cities");
      cities = JSON.parse(cities);
      setCities(cities);
    }

    if(passengers){
      setIsValidData(true)
    }
  }, [reduxCities, passengers]);

  // fucntion to filter destinations, user cant select the same value in origin to the destination value
  const filterDestinations = ({ originID, originName }) => {
    // hook to set origin variables
    setActiveOriginSelect(false);
    setOriginSelected({
      originID: originID,
      originName: originName,
    });
    setIsErrorDate(false);
    setIsErrorDestination(false);

    //filter array to destinations list
    const citiesArray = cities;
    const citiesFilter = citiesArray;
    const filter = citiesFilter.splice(originID, 1); //this var returns the user selected origin

    setDestinations(citiesFilter);
  };

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
      store.dispatch({
        type: "OPEN_MODAL",
        payload: true,
      });
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
            onClick={
              activeOriginSelect
                ? () => setActiveOriginSelect(false)
                : () => setActiveOriginSelect(true)
            }
          >
            <p style={{ paddingLeft: 10 }}>
              <span className="material-icons" style={{ marginRight: 10 }}>
                flight_takeoff
              </span>
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
            className={style.selectDestination}
            style={
              !originSelected.originName
                ? { backgroundColor: "rgba(0, 0, 0, 0.13)" }
                : {}
            }
            onClick={
              originSelected.originName
                ? activeDestinationSelect
                  ? () => setActiveDestinationSelect(false)
                  : () => setActiveDestinationSelect(true)
                : () => setIsErrorDestination(true)
            }
          >
            <p style={{ paddingLeft: 10 }}>
              <span className="material-icons" style={{ marginRight: 10 }}>
                flight_land
              </span>
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
          {isErrorDestination ? (
            <p className={style.errors}>¡Selecciona primero un origen!</p>
          ) : null}
        </div>

        <div className={style.dateAndPerson}>
          <div className={style.dateContainer}>
            <small className={style.smallText} style={{ marginBottom: 10 }}>
              Horarios de salida disponible
            </small>
            <div
              className={style.selectDate}
              style={
                !destinationSelected.destinationName
                  ? { backgroundColor: "rgba(0, 0, 0, 0.13)" }
                  : {}
              }
              onClick={
                destinationSelected.destinationName
                  ? activeDateSelect
                    ? () => setActiveDateSelect(false)
                    : () => setActiveDateSelect(true)
                  : () => setIsErrorDate(true)
              }
            >
              <p
                style={{
                  paddingLeft: 10,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  fontSize: "medium",
                }}
              >
                <span className="material-icons" style={{ marginRight: 5 }}>
                  today
                </span>
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
                        style={{ fontSize: 'smaller' }}
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
                        Salida:{d.takeoff} - Llegada:{d.landing}
                      </p>
                    ))
                  ) : (
                    <option>Cargando...</option>
                  )}
                </div>
              ) : null}
            </div>

            {isErrorDate ? (
              <p className={style.errors}>
                ¡Selecciona primero un origen y un destino!
              </p>
            ) : null}
          </div>

          <div
            className={
              flightDates.takeoff
                ? style.personContainer2
                : style.personContainer
            }
          >
            <small className={style.smallText} style={{ marginBottom: 10 }}>
              Numero de personas
            </small>

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
                onClick={
                  flightDates.takeoff
                    ? () => {
                        setPassengers(passengers + 1);
                        setIsErrorPassengers(false);
                      }
                    : null
                }
                disabled={
                  passengers >= 10 ? true : destinationSelected ? false : true
                }
              >
                +
              </button>
            </div>
            {isErrorPassengers ? (
              <p className={style.errors}>
                ¡Debes seleccionar al menos 1 boleto!
              </p>
            ) : null}
          </div>
        </div>

        <button
          onClick={
            passengers ? () => validData() : () => setIsErrorPassengers(true)
          }
          className={style.reserveBtn}
          style={
            !isValidata
              ? { backgroundColor: "rgba(0, 0, 128, 0.486)" }
              : {}
          }
        >
          Reservar
        </button>
      </div>
      <Reservations active={modalState} />
    </div>
  );
};

export default HomePage;
