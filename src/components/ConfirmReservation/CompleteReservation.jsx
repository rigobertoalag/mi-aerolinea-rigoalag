import React from 'react'
import style from './ConfirmReservation.module.css'

const CompleteReservation = ({complete}) => {
  return (
    <div style={{display: complete ? 'flex' : 'none'}} className={style.container}>
        <h1>Felicidades ya tienes tu vuelo</h1>
        <p>imagen de flecha verde</p>

        <button onClick={() => window.location.reload(false)}>Salir</button>
        <button onClick={() => window.location.reload(false)}>Hacer otra reservacion</button>
    </div>
  )
}

export default CompleteReservation