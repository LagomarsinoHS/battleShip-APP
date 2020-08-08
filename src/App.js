import React, { useState } from 'react';

const App = () => {

  const [state, setState] = useState({
    nombre: "Humberto",
    inicio: true,
    gameBoard: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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

  return (
    <div className="container">

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
            <div className="row mt-5">
              <div className="col-md d-flex justify-content-center">
                <h2>Comienza la Batalla!</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md d-flex justify-content-center">
                <h2 style={{ "display": "inline-block" }}>Turno de: <h4 style={{ "display": "inline-block", "color": "green" }}>{state.nombre}</h4></h2>
              </div>
            </div>


            <div className="row mt-3 text-center">
              <div className="col-md-1 divHijoVertical"></div>
              <div className="col-md-1 divHijoHorizontal">1</div>
              <div className="col-md-1 divHijoHorizontal">2</div>
              <div className="col-md-1 divHijoHorizontal">3</div>
              <div className="col-md-1 divHijoHorizontal">4</div>
              <div className="col-md-1 divHijoHorizontal">5</div>
              <div className="col-md-1 divHijoHorizontal">6</div>
              <div className="col-md-1 divHijoHorizontal">7</div>
              <div className="col-md-1 divHijoHorizontal">8</div>
              <div className="col-md-1 divHijoHorizontal">9</div>
            </div>

            <div className="row text-center">
              <div className="col-md-1 divHijoVertical">1</div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
            </div>

            <div className="row text-center">
              <div className="col-md-1 divHijoVertical">2</div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
            </div>

            <div className="row text-center">
              <div className="col-md-1 divHijoVertical">3</div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
            </div>

            <div className="row text-center">
              <div className="col-md-1 divHijoVertical">4</div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
            </div>

            <div className="row text-center">
              <div className="col-md-1 divHijoVertical">5</div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
            </div>

            <div className="row text-center">
              <div className="col-md-1 divHijoVertical">6</div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
            </div>

            <div className="row text-center">
              <div className="col-md-1 divHijoVertical">7</div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
            </div>

            <div className="row text-center">
              <div className="col-md-1 divHijoVertical">8</div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
            </div>

            <div className="row text-center">
              <div className="col-md-1 divHijoVertical">9</div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
              <div className="col-md-1 mar"></div>
            </div>


          </>)
      }


    </div>

  )
}

export default App;
