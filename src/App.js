import React, { useState } from 'react';
import PanelJugador from './components/panelJugador';
import PanelSistema from './components/panelSistema';
import Swal from 'sweetalert2/src/sweetalert2.js'

const App = () => {

  const [state, setState] = useState({
    nombre: "Humberto",
    inicio: true,
    navePorPosicionar: null,
    disparos: 0,
    direccion: "Vertical",
    gameBoard: [
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
      { nombre: "Portaviones", tamano: 5, lugar: [0, 0, 0, 0, 0], ok: false },
      { nombre: "Acorazado", tamano: 4, lugar: [0, 0, 0, 0], ok: false },
      { nombre: "Submarino", tamano: 3, lugar: [0, 0, 0], ok: false },
      { nombre: "Destructor", tamano: 2, lugar: [0, 0], ok: false }
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

  const fuego = (e) => {
    //console.log(e.target.id)
  }



  const posicionarNave = (e) => {
    //console.log(e.target.id)
    let columna = (e.target.id).charAt((e.target.id).length - 1);
    let tamanoNave = state.naves.filter(nave => nave.nombre === state.navePorPosicionar).map(tamanoNave => tamanoNave.tamano)
    let fila = (e.target.id.charAt(0))

    console.log("PosicionX", fila, "PosicionY", columna)

    if (state.navePorPosicionar == null) {
      Swal.fire('Debes elegir una nave primero')
    }
    /* Validaciones al poner una nave Verticalmente */
    if (state.direccion === "Vertical") {
      console.log("tamaño nave", tamanoNave)
      console.log((tamanoNave - 1) * 10 + parseInt(e.target.id))
      if ((columna === "1" && (tamanoNave - 1) * 10 + parseInt(e.target.id) > 81) ||
        (columna === "2" && (tamanoNave - 1) * 10 + parseInt(e.target.id) > 82) ||
        (columna === "3" && (tamanoNave - 1) * 10 + parseInt(e.target.id) > 83) ||
        (columna === "4" && (tamanoNave - 1) * 10 + parseInt(e.target.id) > 84) ||
        (columna === "5" && (tamanoNave - 1) * 10 + parseInt(e.target.id) > 85) ||
        (columna === "6" && (tamanoNave - 1) * 10 + parseInt(e.target.id) > 86) ||
        (columna === "7" && (tamanoNave - 1) * 10 + parseInt(e.target.id) > 87) ||
        (columna === "8" && (tamanoNave - 1) * 10 + parseInt(e.target.id) > 88) ||
        (columna === "9" && (tamanoNave - 1) * 10 + parseInt(e.target.id) > 89)) {
        Swal.fire('Nave sobrepasa el margen permitido!')
      }
      /* Aqui va el seteo de las naves */
      let { gameBoard } = state
      let cont = 0;

      while (cont <= tamanoNave) {
        gameBoard[fila][columna] = 1
        cont++
        setState(prevState => {
          return { ...prevState, gameBoard }
        })
        console.log("contador", cont)
        console.log("tamano", tamanoNave)
        if (cont == tamanoNave) {
          Swal.fire(`${state.navePorPosicionar} esta listo, siga con la siguiente nave`)

        }
      }




      /*  if (cont != tamanoNave) {
         Swal.fire(`Todavía estas colocando ${state.navePorPosicionar}`)
       } */



    }

    /* Validaciones al poner una nave Horizontalmente */
    if (state.direccion === "Horizontal") {
      if ((fila === "0" && (tamanoNave - 1) + parseInt(e.target.id) > 9) ||
        (fila === "1" && (tamanoNave - 1) + parseInt(e.target.id) > 19) ||
        (fila === "2" && (tamanoNave - 1) + parseInt(e.target.id) > 29) ||
        (fila === "3" && (tamanoNave - 1) + parseInt(e.target.id) > 39) ||
        (fila === "4" && (tamanoNave - 1) + parseInt(e.target.id) > 49) ||
        (fila === "5" && (tamanoNave - 1) + parseInt(e.target.id) > 59) ||
        (fila === "6" && (tamanoNave - 1) + parseInt(e.target.id) > 69) ||
        (fila === "7" && (tamanoNave - 1) + parseInt(e.target.id) > 79) ||
        (fila === "8" && (tamanoNave - 1) + parseInt(e.target.id) > 89)) {
        Swal.fire('Nave sobrepasa el margen permitido!')
      }

    }
  }

  return (
    <div className="container-fluid">

      {
        state.inicio === false ?
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
                <button type="button" name="navePorPosicionar" value="Portaviones" className="btn btn-success btn-sm btnAviones" onClick={posicionyNaves}>Portaviones (5 espacios)</button>
                <button type="button" name="navePorPosicionar" value="Acorazado" className="btn btn-success btn-sm btnAviones" onClick={posicionyNaves}>Acorazado (4 espacios)</button>
                <button type="button" name="navePorPosicionar" value="Submarino" className="btn btn-success btn-sm btnAviones" onClick={posicionyNaves}>Submarino (3 espacios)</button>
                <button type="button" name="navePorPosicionar" value="Destructor" className="btn btn-success btn-sm btnAviones" onClick={posicionyNaves}>Destructor (2 espacios)</button>

                <div className="form-check mt-2">
                  <p style={{ "fontWeight": "bold" }}>¿Posición a colocar?</p>
                  <input className="form-check-input" type="radio" name="direccion" value="Vertical" id="rVertical" defaultChecked onClick={posicionyNaves} />
                  <label className="form-check-label" htmlFor="rVertical">
                    Vertical
                  </label>
                </div>
                <div className="form-check mt-2">
                  <input className="form-check-input" type="radio" name="direccion" value="Horizontal" id="rHorizontal" onClick={posicionyNaves} />
                  <label className="form-check-label" htmlFor="rHorizontal">
                    Horizontal
                  </label>
                </div>
              </div>


              {/* Panel de Jugador */}
              <PanelJugador fuego={fuego} posicionarNave={posicionarNave} />
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
