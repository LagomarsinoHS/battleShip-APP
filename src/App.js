import React, { useState } from 'react';
import PanelJugador from './components/panelJugador';
import PanelSistema from './components/panelSistema';

const App = () => {

  const [state, setState] = useState({
    nombre: "Humberto",
    inicio: true,
    navePorPosicionar: null,
    disparos: 0,
    VoH: "Vertical",
    gameBoard: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    naves: [
      { nombre: "Portaviones", tamano: 5, lugar: [0, 0, 0, 0, 0] },
      { nombre: "Acorazado", tamano: 4, lugar: [0, 0, 0, 0] },
      { nombre: "Submarino", tamano: 3, lugar: [0, 0, 0] },
      { nombre: "Destructor", tamano: 2, lugar: [0, 0] }
    ]
  })

  const consigueNombre = (e) => {
    let data = { [e.target.name]: e.target.value }

    setState(prevState => {
      return { ...prevState, ...data }
    })
  }

  const iniciarJuego = () => {
    let spanNombre = document.querySelector("#spanNombre")
    if (state.nombre == null) {
      spanNombre.removeAttribute("hidden");
    } else {
      spanNombre.innerHTML = ""
      setState(prevState => {
        return { ...prevState, inicio: !state.inicio }
      })
    }
  }

  const posicionyNaves = (e) => {
    let data = { [e.target.name]: e.target.value }
    setState(prevState => {
      return { ...prevState, ...data }
    })
  }

  const fuego = (e)=>{
    console.log(e.target.id)
  }

  return (
    <div className="container-fluid">

      {
        state.inicio == false ?
          <>
            <div className="row">
              <div className="col-md-12 border text-center mt-5">
                <h1 className="">Bienvenid@ a BattleShip!</h1>
              </div>
            </div>

            <div className="row mt-5 d-flex justify-content-center ">
              <div className="col-md-3">
                <h5 className="text-center">Ingresa tu Nombre</h5>
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" name="nombre" onChange={consigueNombre} />
                <span className="text-danger" id="spanNombre" hidden>Debes ingresar tu nombre!</span>
              </div>
            </div>

            <div className="row mt-5 d-flex justify-content-center">
              <div className="col-md-3">
                <h5 className="text-center">¿Estas listo para iniciar el ataque?</h5>
              </div>
              <div className="col-md-1">
                <button type="button" className="btn btn-outline-success btn-block" onClick={iniciarJuego}>SI!</button>
              </div>
            </div>
          </>
          :
          (<>
            <div className="row mt-2">
              <div className="col-md d-flex justify-content-center">
                <h2>Comienza la Batalla!</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md d-flex justify-content-center">
                {/* <h2 style={{ "display": "inline-block" }}>Turno de: <h4 style={{ "display": "inline-block", "color": "green" }}>{state.nombre}</h4></h2> */}
                <h2>Posicione sus naves!</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md d-flex justify-content-center">
                {/* <h2 style={{ "display": "inline-block" }}>Turno de: <h4 style={{ "display": "inline-block", "color": "green" }}>{state.nombre}</h4></h2> */}
                <h5 style={{ "color": "orange", "fontWeight": "bold" }}>{!state.navePorPosicionar ? "" : state.navePorPosicionar}</h5>
              </div>
            </div>

            {/* Row de mensajes arriba de los paneles */}
            <div className="row">
              <div className="col-md-6"><h2 className="text-center">Panel de {!state.nombre ? "" : state.nombre}</h2></div>
              <div className="col-md-6"><h2 className="text-center">Panel del Sistema</h2></div>
            </div>
            {/* -----------------------*/}

            <div className="row"> {/* Row Linea de paneles */}
              {/* Panel Izquierdo */}
              <div className="col-md-1"><u style={{ "display": "block", "fontWeight": "bold" }}>Tus naves:</u>
                <button type="button" name="navePorPosicionar" value="Portaviones" class="btn btn-success btn-sm btnAviones" onClick={posicionyNaves}>Portaviones (5 espacios)</button>
                <button type="button" name="navePorPosicionar" value="Acorazado" class="btn btn-success btn-sm btnAviones" onClick={posicionyNaves}>Acorazado (4 espacios)</button>
                <button type="button" name="navePorPosicionar" value="Submarino" class="btn btn-success btn-sm btnAviones" onClick={posicionyNaves}>Submarino (3 espacios)</button>
                <button type="button" name="navePorPosicionar" value="Destructor" class="btn btn-success btn-sm btnAviones" onClick={posicionyNaves}>Destructor (2 espacios)</button>

                <div className="form-check mt-2">
                  <p style={{ "fontWeight": "bold" }}>¿Posición a colocar?</p>
                  <input className="form-check-input" type="radio" name="VoH" value="Vertical" id="rVertical" defaultChecked onClick={posicionyNaves} />
                  <label className="form-check-label" for="rVertical">
                    Vertical
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input className="form-check-input" type="radio" name="VoH" value="Horizontal" id="rHorizontal" onClick={posicionyNaves} />
                  <label className="form-check-label" for="rHorizontal">
                    Horizontal
                  </label>
                </div>
              </div>


              {/* Panel de Jugador */}
              <PanelJugador fuego={fuego} />
              {/* -------------------- */}

              {/* Panel de Sistema */}
              <PanelSistema />
              {/* ------------------------- */}
            </div>{/* Cierre Row */}


            {/* Zona inferior, zona de puntajes */}
            <div className="row">
              <div className="col-md-6 offset-md-2">
                <h4>Disparos: {}</h4>
              </div>
            </div>
            {/* ---------------------- */}
























          </>)
      }
    </div>

  )
}

export default App;
