import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>
        <div>
          <small>Origen</small>
          <select name="select">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>

        <div>
          <small>Destino</small>
          <select name="select">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>

        <div>
          <small>Selecciona el horario</small>
          <select name="select">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>

        <div>
          <small>Numero de personas</small>
          <input placeholder="0"/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
