import React from "react";
import { useSelector } from "react-redux";
import Reservations from "./Reservations/Reservations.jsx";
import store from "../Redux/apiCall/store";

const NavBar = () => {
  const modalState = useSelector((state) => state.activeReservationModal);
  
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
    }
  };

  return (
    <div
      style={{
        backgroundColor: "navy",
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          color: "white",
          fontWeight: "bolder",
          fontSize: "x-larger",
          marginLeft: 20,
        }}
      >
        Mi Aerolínea
      </p>

      <button
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "white",
          justifyItems: "center",
          marginRight: 20,
          cursor: "pointer",
          backgroundColor: 'navy',
          border:'none'
        }}
        onClick={() => showHideModal()}
      >
        <span className="material-icons">
          shopping_cart
        </span>
        <p style={{ fontSize: "x-small" }}>Reservaciones</p>
      </button>

      <Reservations active={modalState} />
    </div>
  );
};

export default NavBar;
